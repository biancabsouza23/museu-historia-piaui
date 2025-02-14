import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { BookItem } from "@/components/library/BookItem";

import BooksInfo from "@/assets/content/livros.json";
import { ReadableThemedText } from "@/components/ReadableThemedText";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<Ionicons size={310} name="book" style={styles.headerImage} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Livros</ThemedText>
      </ThemedView>
      <ReadableThemedText>Segue abaixo uma lista de livros disponíveis:</ReadableThemedText>
      {
        BooksInfo.map((category, index) => {
          return (
            <Collapsible key={index} title={category.name}>
              {category.content.map((book, index2) => (
                <BookItem
                  key={index2}
                  title={book.title}
                  url={book.drive_url}
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
});
