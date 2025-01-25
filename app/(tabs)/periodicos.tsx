import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SimpleBookItem } from "@/components/library/SimpleBookItem";

import PeriodicosList from "@/assets/content/periodicos_seculo_xixxx.json";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<Ionicons size={310} name="book" style={styles.headerImage} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Periódicos</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText style={styles.justifiedText}>
          Esses arquivos foram adquiridos e armazenados pelo PET-História da UFPI em um projeto de
          digitalização dos jornais piauienses juntamente com o curso de comunicação social da UFPI.
          Agradecemos ao tutor do PET, o doutor professor Johny Santana de Araújo, professor do
          departamento de História da UFPI, que autorizou e disponibilizou o acervo que estava
          armazenado em um HD-EXTERNO, para disponibilizarmos para a comunidade pelo Museu de
          História do Piauí.
        </ThemedText>
      </ThemedView>

      {PeriodicosList.map((periodico) => {
        return (
          <Collapsible key={periodico.name} title={periodico.name}>
            {periodico.content.map((item) => (
              <SimpleBookItem
                key={item.title}
                title={item.title}
                url={item.drive_url}
              />
            ))}
          </Collapsible>
        );
      })}
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
