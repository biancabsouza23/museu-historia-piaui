import { Button, View, type ViewProps } from 'react-native';
import * as Speech from 'expo-speech';

import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export type ReadableThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ReadableThemedView({ style, lightColor, darkColor, ...otherProps }: ReadableThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const handleButtonPress = () => {
    let values = otherProps?.children;
    if (!values) {
      return;
    }
    let text = '';
    const handleValue = (value: any) => {
      let content = '';
      let type = typeof value;
      if (value.type === ThemedText) {
        const childValue = handleValue(value.props.children);
        content = childValue;
      }
      if (value.type === ThemedView) {
        const childValue = handleValue(value.props.children);
        content = childValue;
      }
      if (typeof value === 'string') {
        content = value;
      }
      if (Array.isArray(value)) {
        content = value.map((v) => handleValue(v)).join(' ');
      }
      return content;
    };
    let pieces = [];
    // Check values for null or undefined
    for (const value of values) {
      pieces.push(handleValue(value));
    }
    text = pieces.join(' ');
    console.log("Speaking:", text);
    Speech.speak(text);
  };


  return <View style={[{ backgroundColor }, style]}>
    <Button title="Ler" onPress={handleButtonPress}></Button>
    {otherProps.children}
  </View>;

}
