import Ionicons from "@expo/vector-icons/Ionicons";
import { PropsWithChildren } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ExternalLink } from "@/components/ExternalLink";

export function SimpleBookItem({
  title,
  url,
}: PropsWithChildren & { title: string; url: string }) {
  return (
    <ThemedView style={{ flexDirection: "row", gap: 8 }}>
      <ThemedText>
        <Ionicons size={16} name="book" />
      </ThemedText>
      <ThemedView>
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
        <ExternalLink href={url}>
          <ThemedText type="link">
            <Ionicons size={12} name="globe" /> Acessar
          </ThemedText>
        </ExternalLink>
      </ThemedView>
    </ThemedView>
  );
}
