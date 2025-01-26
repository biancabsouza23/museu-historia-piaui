import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import PhotosInfo from "@/assets/content/photos.json";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<Ionicons size={310} name="images-outline" style={styles.headerImage} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Fotos e Vídeos</ThemedText>
      </ThemedView>

      {
        PhotosInfo.map((photoInfo, index) => (
          <Collapsible key={index} title={photoInfo.name}>
            {
              photoInfo.content.map((photo, index2) => (
                <ThemedView key={index2}>
                  <Image src={photo.url} style={{ width: "100%", minHeight: 200, maxHeight: 300 }} />
                  <ThemedText>{photo.title}</ThemedText>
                </ThemedView>
              ))
            }
          </Collapsible>
        ))
      }
    </ParallaxScrollView >
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
  }
});
