import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { BookItem } from "@/components/library/BookItem";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<Ionicons size={310} name="book" style={styles.headerImage} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Livros</ThemedText>
      </ThemedView>
      <ThemedText>Segue abaixo uma lista de livros disponíveis:</ThemedText>

      {/* Livros de memória de piauienses que viveram a ditadura militar */}
      <Collapsible title="Livros de memória de piauienses que viveram a ditadura militar">
        <ThemedView style={{ gap: 24 }}>
          <ThemedText>
            Neste tópico colocamos livros de memória escritas por piauienses que presenciaram sendo apoiadores ou contra
            a ditadura militar no Piauí.
          </ThemedText>
          <ThemedView>
            <BookItem
              title="1968"
              author="Antônio José de Medeiros"
              url="https://drive.google.com/file/u/0/d/1Thajn-BOu1SgM7UtCE72WOSpcJ66Ztgv/view"
            />
            <BookItem
              title="Movimentos Sociais e Participação Política"
              author="Antônio José de Medeiros"
              url="https://drive.google.com/file/u/0/d/17nCfeqrezf1LQEg0-raa1PLLEBwbujtK/view"
            />
            <BookItem
              title="1964: o DNA da conspiração"
              author="Jônatas de Barros Nunes e Gastão Rúbio de Sá Weyne"
              url="https://drive.google.com/file/d/122z_y-uEPIMIdoY7U5UmeY27EibdifgD/view"
            />
            <BookItem
              title="Tempos de Contar"
              author="Jesualdo Cavalcanti Barros"
              url="https://drive.google.com/file/d/12dzL_2rCdbkYSKrBwiWIhaPlWCX-YQ2F/view"
            />
            <BookItem
              title="Marcas da Ditadura no Piauí"
              author="Deoclécio Dantas"
              url="https://drive.google.com/file/d/1yJ-pB0LFvaXifqKU1rpi5dF7ipX9_Xo9/view"
            />
            <BookItem
              title="História Oral do Exército sobre 1964"
              author="Biblioteca do Exército"
              url="https://drive.google.com/file/d/1E-d2l37LWgxNj_XiIvRYapy02SBHg-Lc/view"
            />
          </ThemedView>
        </ThemedView>
      </Collapsible>

      {/* Livros sobre figuras "ilustres" piauienses */}
      <Collapsible title="Livros sobre figuras 'ilustres' piauienses">
        <ThemedView style={{ gap: 24 }}>
          <ThemedText>
            Neste tópico colocamos os livros de memória ou pesquisas acadêmicas a respeito de figuras "ilustres" -
            políticos e acadêmicos - que ficaram marcados na política piauiense.
          </ThemedText>
          <ThemedView>
            <BookItem
              title="Marquês de Paranaguá"
              author="Chico Carlos"
              url="https://drive.google.com/file/d/1Du6kt9JPLGeqHOrOotNtty5_xN4X6jp7/view"
            />
            <BookItem
              title="Wall Ferraz: O Homem e o Estadista"
              author="Fundação Monsenhor Chaves"
              url="https://drive.google.com/file/d/1W6sBFSUzRcwAN6XUskQ_JHm0Vp4YA2um/view"
            />
            <BookItem
              title="Chagas Rodrigues"
              author="Kenard Kruel"
              url="https://drive.google.com/file/d/12atS6F5L4AOhpqoDoPrJZhZelryrsxMb/view"
            />
            <BookItem
              title="Djalma Veloso: o político e sua época"
              author="Kenard Kruel"
              url="https://drive.google.com/file/d/1-XcVb8bTAboDSjHExPZd1TbGTXvQvrhe/view"
            />
            <BookItem
              title="Petrônio Portella"
              author="Zózimo Tavares"
              url="https://drive.google.com/file/d/12asHZn9tCj_UhyVF_BWld1AuXqOw4o_p/view"
            />
            <BookItem
              title="Petrônio Portella: Depoimentos à História politica brasileira"
              author="Osvaldo Lemos"
              url="https://drive.google.com/file/d/1J_GyrFnQYtM5CNk_4pQpESdfSsh9vxgn/view"
            />
            <BookItem
              title="Memória Jurisprudencial"
              author="Ministro Evandro Lins e Silva"
              url="https://drive.google.com/file/d/1cbHwzIeaRmS1NHxKVjCR6E3yXOBzvLEx/view"
            />
            <BookItem
              title="Depoimentos em memória"
              author="Evandro de Lins e Silva"
              url="https://drive.google.com/file/d/1sq1F6HPazR4o-c7_v8sUBplakJZ2mXOA/view"
            />
          </ThemedView>
          <ThemedText>Livros escritos por figuras piauienses ilustres</ThemedText>
          <ThemedView>
            <BookItem
              title="Memória e depoimentos de José"
              author="Rocha Furtado"
              url="https://drive.google.com/file/d/1Mjm67PzjJeI3CP_NpDD3_gyECt2FQQ1Y/view"
            />
            <BookItem
              title="Tempos de Política"
              author="Petrônio Portella Nunes"
              url="https://drive.google.com/file/d/1jDCOvpT3bV6PbtLnwY1mwQxCpicm8ATk/view"
            />
            <BookItem
              title="Sugestões e emendas na Assembleia Constituinte"
              author="Myrian Portella"
              url="https://drive.google.com/file/d/1mCTvAex6JaYlZwI27REqe9AGGGwJAjHg/view"
            />
            <BookItem
              title="Chagas Rodrigues na constituinte e no senado federal"
              author="Chagas Rodrigues"
              url="https://drive.google.com/file/d/1RlOYO3xpFfNc2SIRFcJRSRr7F4UcAEey/view"
            />
          </ThemedView>
        </ThemedView>
      </Collapsible>

      {/* Livros escritos por autoridades piauienses */}
      <Collapsible title="Livros escritos por autoridades piauienses"></Collapsible>

      {/* Livros sobre o Piauí */}
      <Collapsible title="Livros sobre o Piauí">
        {/* Historiografia piauiense clássica */}
        {/* Livros de memória sobre o Piauí */}
      </Collapsible>

      {/* Livros jurídicos sobre o Piauí */}
      <Collapsible title="Livros jurídicos sobre o Piauí">
        <ThemedView style={{ gap: 24 }}>
          <ThemedText>
            Somos gratos ao pesquisador e membro do grupo de pesquisa do Museu Virtual do Piauí,{" "}
            <ThemedText type="defaultSemiBold">Ronald Cavalcante Castelo Branco</ThemedText>, por ter digitalizado,{" "}
            catalogado e disponibilizado os arquivos de documentos jurídicos para o site do Museu de História do Piauí.
          </ThemedText>
          <ThemedView>
            <BookItem
              title="Codificação processual"
              author="Christino Castelo Branco"
              year="1920"
              url="https://drive.google.com/file/d/1R1nuKMyK46Q7cMaXwmCshu5Wqzf2Vdg4/view"
            />
            <BookItem
              title="Defesa de Othon Ramos de Almeida"
              author="Christino Castelo Branco"
              url="https://drive.google.com/file/d/1ZANdsZV0teV0a4nBrYpJIhdBBeP25lQ4/view"
            />
            <BookItem
              title="Justiça Nacional (Contribuição Piauiense) - Parte I"
              author="Desembargador José de Arimatéa Tito"
              year="1940"
              url="https://drive.google.com/file/d/1fYKMZZbsIheJT-wHCfxLfEIb-GZqI3Mb/view"
            />
            <BookItem
              title="Justiça Nacional (Contribuição Piauiense) - Parte II"
              author="Desembargador José de Arimatéa Tito"
              year="1940"
              url="https://drive.google.com/file/d/1s_Qzf9INlmWpXEtKgzu9aCzHqt_8iEjM/view"
            />
            <BookItem
              title="Código do processo civil e commercial do Estado do Piauhy"
              author="Álvaro Fernando da Rocha Mota"
              year="2022"
              url="https://drive.google.com/file/d/1ZWtAzi18MsE0-sJyFXhDLt5PNJNNBu8W/view"
            />
            <BookItem
              title="Código do processo penal do Estado do Piauhy"
              author="Álvaro Fernando da Rocha Mota"
              year="2021"
              url="https://drive.google.com/file/d/1kNbsbdbngOjVSti2ZpkN9nz6zl-UfTBf/view"
            />
            <BookItem
              title="Esmarago de Freitas: HOMENS e episódios"
              author="Arimatheia Tito Filho"
              year="1934"
              url="https://drive.google.com/file/d/1NuOQ-Lhd8_rT0L-MEy-n1kybRCL9Vg9t/view"
            />
            <BookItem
              title="Desembargadores de ontem e hoje"
              author="Viddal de Freitas"
              year="1979"
              url="https://drive.google.com/file/d/1im5idyPLzO0ZbNajUNdbEckxh_2XrYmg/view"
            />
            <BookItem
              title="Sonetos"
              author="Cromwell Barbosa de Carvalho"
              year="1982"
              url="https://drive.google.com/file/d/1IcXS_H2IRAtCcePk1nmOYcT5WCWCEMKB/view"
            />
            <BookItem
              title="Defesa do professor Leolpoldo Cunha"
              author="Dr. Higino Cunha"
              year="1934"
              url="https://drive.google.com/file/d/1gTjMCokyecnbmKlmP7Z7pHR2hTYNwtTM/view"
            />
            <BookItem
              title="Acção de Reinvidicação"
              author="Dr Antônio José da Costa"
              year="1921"
              url="https://drive.google.com/file/d/1KG-oEVr4z4Lro-VpiBzfUNKTMp6Jn6hP/view"
            />
            <BookItem
              title="Acção Ordinária"
              author="Dom Severino Vierea Neto"
              year="1928"
              url="https://drive.google.com/file/d/1j9mZRkiS4GJavqr1LUb9wbN_H4yG2vuU/view"
            />
          </ThemedView>
        </ThemedView>
      </Collapsible>

      {/* Livros de medicina do Piauí */}
      <Collapsible title="Livros de medicina do Piauí">
        <BookItem
          title="História da Medicina no Piauí"
          author="Luís Ayrton Santos Júnior"
          url="https://drive.google.com/file/d/1b7YDYCg0w_WQ9bCGfbTlEZqq_1dwrdXO/view"
        />
        <BookItem
          title="Paralysia geral dos alienados nas enfermidades de clínica médica"
          author="Dr. Oscar Clark"
          year="1915"
          url="https://drive.google.com/file/d/18Xfdpe1jzkoGSWnIHrTXtwCC76aLJZUH/view"
        />
        <BookItem
          title="Meus doentes, meus clientes..."
          author="Dr. Octávio de Freitas"
          year="1923"
          url="https://drive.google.com/file/d/1oX37S7lOzZLa8sVjADFDqCfcAOTWqraZ/view"
        />
        <BookItem
          title="Avaliação e observações psiquiátricas caso de inadaptação, simulação e invalidez"
          author="Humberto Soares Guimarães"
          year="1978"
          url="https://drive.google.com/file/d/1stYzcu9qiq4Om0A9ntAk_BOxUU8114Oo/view"
        />
        <BookItem
          title="Casos Singular - Mudinho não era Mudo"
          author="Humberto Guimarães"
          url="https://drive.google.com/file/d/1cH7EFFF6GS3v759s-ilE2JRx1520gARZ/view"
        />
        <BookItem
          title="Ideologia e circunstância"
          author="Clidenor Freitas"
          url="https://drive.google.com/file/d/1UQ_DAFn54OeRym9-IpI_Tb18XRUworeJ/view"
        />
        <BookItem
          title="Importância da syphilis e seu tratamento"
          author="Dr. Oscar Clark"
          year="1920"
          url="https://drive.google.com/file/d/1KT8Xjg2hYrnzx5qtHX-AY_6NWaKpJoAD/view"
        />
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
});
