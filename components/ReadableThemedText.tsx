import { Text, type TextProps, StyleSheet, Button } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import * as Speech from 'expo-speech';
import { ThemedText } from './ThemedText';

export type ReadableThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ReadableThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ReadableThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const handleButtonPress = () => {
    let text = '';
    let values = rest.children;
    const handleValue = (value) => {
      let content = '';
      let type = typeof value;
      if (value.type === ThemedText) {
        const childValue = handleValue(value.props.children);
        content = childValue;
      }
      else if (typeof value === 'string') {
        content = value;
      } else if (Array.isArray(value)) {
        content = value.map((v) => handleValue(v)).join(' ');
      }
      return content;
    };
    let pieces = [];
    if (Array.isArray(values)) {
      for (const value of values) {
        pieces.push(handleValue(value));
      }
    } else {
      pieces = [handleValue(values)];
    }
    text = pieces.join(' ');
    console.log("Speaking:", text);
    Speech.speak(text);
  }

  return (
    <>
    <Button title="Ler" onPress={handleButtonPress}></Button>
      <Text
        style={[
          { color },
          type === 'default' ? styles.default : undefined,
          type === 'title' ? styles.title : undefined,
          type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
          type === 'subtitle' ? styles.subtitle : undefined,
          type === 'link' ? styles.link : undefined,
          style,
        ]}
        {...rest}
      />
    </>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
