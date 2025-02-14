import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SimpleBookItem2 } from "@/components/library/SimpleBookItem2";

import PPGHBInfo from "@/assets/content/dissertacoes_teses.json";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<Ionicons size={310} name="book" style={styles.headerImage} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"  >Teses e dissertações de Doutorado do corpo docente da PPGHB</ThemedText>
      </ThemedView>
      <ThemedText style={styles.justifiedText}>
        Essa subpágina do Múseu de História do Piauí, por causa da relação com o Programa de Pós-Graduação
        em História do Brasil da UFPI,  estão inseridas todas as teses de doutorado e dissertações de mestrado
        dos Professores Doutores que fazem parte do corpo docente do PPGHB. As teses de doutorado são de abordagens
        diversas, não se limitando aos estudos do Estado do Piauí, no recorte do século XX.
      </ThemedText>

      {
        PPGHBInfo.map((category, index) => {
          return (
            <Collapsible key={index} title={category.name}>
              {category.content.map((item, index2) => (
                <SimpleBookItem2
                  key={index2}
                  title={item.title}
                  url={item.drive_url}
                  author=""
                />
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
});
