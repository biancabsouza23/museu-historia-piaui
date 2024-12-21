import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SimpleBookItem } from "@/components/library/SimpleBookItem";
import ParallaxScrollView from "@/components/ParallaxScrollView";

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
      
      <Collapsible title="A Luta">
        <ThemedText style={styles.justifiedText}>
          "Em 19 de novembro de 1967, começou a circular, na cidade de Campo Maior, localizada no estado do Piauí, o jornal 
          intitulado A Luta. O referido jornal foi fundado pelo político e jornalista Raimundo Antunes Ribeiro e circulou na 
          cidade até o ano de 1979. O jornal era publicado uma vez por semana e circulava aos sábados ou aos domingos, contendo 
          de 6 a 8 páginas. Seu primeiro diretor foi Raimundo Antunes Ribeiro (1967-1969). Na década de 1970, assumiram, em 
          períodos diferentes, os cargos de diretores do periódico: José Miranda Filho (1970-1979), Dilson Lins da Trindade 
          (1970), Ernâni Napoleão Lima (1971-1972), José Rodrigues de Miranda (1975-1979) e Zeferino Alves Neto (1976-1977)".
        </ThemedText>

        <Collapsible title="Periódicos de 1967">
        <SimpleBookItem
          title="Dezembro de 1967"
          url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
        />
        </Collapsible>
        <Collapsible title="Periódicos de 1968">
        <SimpleBookItem
          title="Junho de 1968"
          url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
        />
        <SimpleBookItem
          title="Julho de 1968"
          url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
        />
        <SimpleBookItem
          title="Outubro de 1968"
          url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
        />
        <SimpleBookItem
          title="Novembro de 1968"
          url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
        />
        <SimpleBookItem
          title="Dezembro de 1968"
          url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
        />
        </Collapsible>
        
        <Collapsible title="Periódicos de 1969">
          <SimpleBookItem
            title="Janeiro de 1969"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Março de 1969"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Abril de 1969"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Maio de 1969"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Agosto de 1969"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>

        <Collapsible title="Periódicos de 1970">
          <SimpleBookItem
            title="Maio de 1970"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Julho de 1970"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Agosto de 1970"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Setembro de 1970"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Novembro de 1970"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Dezembro de 1970"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>

        <Collapsible title="Periódicos de 1971">
          <SimpleBookItem
            title="Janeiro de 1971"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Fevereiro de 1971"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Março de 1971"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Abril de 1971"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Maio de 1971"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Novembro de 1971"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>

        <Collapsible title="Periódicos de 1976">
          <SimpleBookItem
            title="Fevereiro de 1976"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Novembro de 1976"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Dezembro de 1976"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>

        <Collapsible title="Periódicos de 1977">
          <SimpleBookItem
            title="Fevereiro de 1977"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Março de 1977"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Abril de 1977"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Junho de 1977"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Julho de 1977"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Agosto de 1977"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Setembro de 1977"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>

        <Collapsible title="Periódicos de 1978">
          <SimpleBookItem
            title="Junho de 1978"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Julho de 1978"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Agosto de 1978"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Setembro de 1978"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>

        <Collapsible title="Periódicos de 1979">
          <SimpleBookItem
            title="Julho de 1979"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Agosto de 1979"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Setembro de 1979"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>
        
      
      </Collapsible>

      <Collapsible title="A Hora">

      <Collapsible title="Periódicos de 1972">
          <SimpleBookItem
            title="Janeiro à Abril de 1972"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Maio à Junho de 1972"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Julho de 1972"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Setembro à Dezembro de 1972"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>

        <Collapsible title="Periódicos de 1973">
          <SimpleBookItem
            title="Janeiro de 1973"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Fevereiro de 1973"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Março de 1973"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />          
        </Collapsible>

        <Collapsible title="Periódicos de 1974">
          <SimpleBookItem
            title="Maio de 1974"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Junho de 1974"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Julho de 1974"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Agosto de 1974"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
          <SimpleBookItem
            title="Setembro de 1974"
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/view"
          />
        </Collapsible>

      </Collapsible>

      <Collapsible title="O Dia">
        <ThemedText>This app includes example code to help you get started.</ThemedText>
      </Collapsible>

      <Collapsible title="Estado do Piauí">
        <ThemedText>This app includes example code to help you get started.</ThemedText>
      </Collapsible>

      <Collapsible title="O Dominical">
        <ThemedText>This app includes example code to help you get started.</ThemedText>
      </Collapsible>

      <Collapsible title="O Liberal">
        <ThemedText>This app includes example code to help you get started.</ThemedText>
      </Collapsible>

      <Collapsible title="O Estado">
        <ThemedText>This app includes example code to help you get started.</ThemedText>
      </Collapsible>

      <Collapsible title="Gazeta do Piauí">
        <ThemedText>This app includes example code to help you get started.</ThemedText>
      </Collapsible>

      <Collapsible title="Jornal do Piauí">
        <ThemedText>This app includes example code to help you get started.</ThemedText>
      </Collapsible>

      <Collapsible title="Jornais alternativos">
        <ThemedText>This app includes example code to help you get started.</ThemedText>
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
  referenceText: {
    textAlign: "justify",
    fontSize: 12,
    fontStyle: "italic",
    marginTop: 1,
  },
});
