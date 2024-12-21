import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={<Image source={require("@/assets/images/simple-header-blended-small.png")} style={styles.reactLogo} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Museu de História do Piauí</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Image source={require("@/assets/images/mhp-logo.jpeg")} style={styles.mhpLogo} />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sobre</ThemedText>
        <ThemedText style={styles.justifiedText}>
          O <ThemedText type="defaultSemiBold">Museu de História do Piauí - MHP</ThemedText> é um espaço virtual de
          pesquisa histórica e historiográfica.
        </ThemedText>
        <ThemedText style={styles.justifiedText}>
          Criado no ano de 2022, diretamente vinculado ao{" "}
          <ThemedText type="defaultSemiBold">Departamento de História - DH</ThemedText> e ao{" "}
          <ThemedText type="defaultSemiBold">Programa de Pós-Graduação em História do Brasil</ThemedText>, do Centro de
          Ciências Humanas e Letras - CCHL, da Universidade Federal do Piauí - UFPI.
        </ThemedText>
        <ThemedText style={styles.justifiedText}>
          Tem-se como principais objetivos digitalizar, armazenar e disponibilizar diferentes arquivos como imagens,
          documentos e vídeos da história do Piauí.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    width: '100%',
  },
  mhpLogo: {
    height: 200,
    width: 200,
    borderRadius: 100,
    alignSelf: "center",
  },
  justifiedText: {
    textAlign: "justify",
  },
});
