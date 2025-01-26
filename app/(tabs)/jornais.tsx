import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SimpleBookItem } from "@/components/library/SimpleBookItem";
import ParallaxScrollView from "@/components/ParallaxScrollView";

import JornaisInfo from "@/assets/content/jornais.json";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<Ionicons size={310} name="book" style={styles.headerImage} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Jornais</ThemedText>
      </ThemedView>
      <ThemedText>Segue abaixo a lista de jornais disponíveis.</ThemedText>

      {JornaisInfo.map((jornal, index) => {
        return (
          <Collapsible key={index} title={jornal.name}>
            {jornal.years.map((years, index) => (
              <Collapsible key={index} title={years.name}>
                {years.content.map((item, index) => (
                  <SimpleBookItem
                    key={index}
                    title={item.title}
                    url={item.drive_url}
                  />))}
              </Collapsible>
            ))}
          </Collapsible>
        );
      })
      }

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  justifiedText: {
    textAlign: "justify",
    lineHeight: 20,
  },
  referenceText: {
    textAlign: "justify",
    fontSize: 12,
    fontStyle: "italic",
    marginTop: 1,
  },
});
