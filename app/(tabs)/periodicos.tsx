import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SimpleBookItem } from "@/components/library/SimpleBookItem";

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

      <Collapsible title="Periódicos Piauienses do século XIX">

        <Collapsible title="A Imprensa (1880-1882)">

          <SimpleBookItem
            title="1880"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Primeiro Semestre de 1881"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Segundo Semestre de 1881"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="1882"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>

        <Collapsible title="O Amigo do Povo (1868-1870)">
          <SimpleBookItem
            title="1868"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="1869"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="1870"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>

        <Collapsible title="Phiauy (1869-1873)">
          <SimpleBookItem
            title="1869"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="1870"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Primeiro Semestre de 1871"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Segundo Semestre de 1871"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="1872"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="1873"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>
      </Collapsible>

      <Collapsible title="Periódicos Piauienses da primeira metado do século XX">

        <Collapsible title="A Borboleta (1905-1906)">
          <SimpleBookItem
            title="1905"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="1906"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>

        <Collapsible title="O Comércio (1906-1908)">
          <SimpleBookItem
            title="1906"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Primeiro Semestre de 1908"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Segundo Semestre de 1908"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>

        <Collapsible title="Correio de Oeiras (1909-1910)">
          <SimpleBookItem
            title="1909"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="1910"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>

        <Collapsible title="O Monitor (1908-1910)">
          <SimpleBookItem
            title="1908"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="1909"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="1910"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>

        <Collapsible title="Auras do Norte (1911-1912)">
          <SimpleBookItem
            title="1911"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="1912"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>

        <Collapsible title="A Andorinha (1912)">
          <SimpleBookItem
            title="1 de Outubro de 1912"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="2 de Outubro de 1912"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>

        <Collapsible title="O Tempo (1915-1916)">
          <SimpleBookItem
            title="1915"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="1916"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>

        <Collapsible title="O Artista (1919-1922)">
          <SimpleBookItem
            title="1919"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="1920"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="1922"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>

        <Collapsible title="O Arrebol (1918-1925)">
          <SimpleBookItem
            title="1918"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="1922"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="1923"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="1924"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="1925"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>

        <Collapsible title="A Gazeta (1937-1939)">
          <SimpleBookItem
            title="1937"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Primeiro Semestre de 1938"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Segundo Semestre de 1938"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="1939"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>

        <Collapsible title="O Estimulo (1946-1949)">
          <SimpleBookItem
            title="Janeiro de 1946"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Fevereiro de 1946"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Março de 1946"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Abril de 1946"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Julho de 1946"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />

        </Collapsible>

        <Collapsible title="Renascimento (1946)">
          <SimpleBookItem
            title="10 de Fevereiro de 1946"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="3 de Março de 1946"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title=" 12 de Março de 1946"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="?? de 1946"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="7 de Setembro de 1946"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="19 de Outubro de 1946"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />

        </Collapsible>



      </Collapsible>
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
