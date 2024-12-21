import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SimpleBookItem2 } from "@/components/library/SimpleBookItem2";

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

      <Collapsible title="Teses de Doutorado">
        <SimpleBookItem2
          title="Os literatos e a República"
          author="Teresinha Queiroz"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />
        <SimpleBookItem2
          title="A cidade sob o fogo"
          author="Francisco Alcides do Nascimento"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />
        <SimpleBookItem2
          title="Famílias e escritas"
          author="Pedro Vilarinho Castelo Branco"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />
        <SimpleBookItem2
          title="[...] cumprindo ao homem ser trabalhador, instruído e moralizado"
          author="Francisco Gleison da Costa Monteiro"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />
        <SimpleBookItem2
          title="Entre Vaqueiros e Fidalgos"
          author="Marcelo de Sousa Neto"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />
        <SimpleBookItem2
          title="Bravos no Piauí"
          author="Johny Santana de Araújo"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />
        <SimpleBookItem2
          title="Identidades de gênero, amor e casamento em Teresina (1920-1960)"
          author="Elizangela Barbosa Cardoso"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />
        <SimpleBookItem2
          title="Manter sadia a Criança Sã"
          author="Joseanne Zingleare Soares Marino"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />
        <SimpleBookItem2
          title="Relações de poder e praticas jornalísticas em O Dia, A Cidade e o Jornal do Piauí"
          author="Nilsângela Cardoso Lima"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />
        <SimpleBookItem2
          title="Visionários de um Brasil profundo"
          author="Fábio Leornado Castelo Branco Brito"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />
        <SimpleBookItem2
          title="Todos os Dias de Paupéria"
          author="Edwar de Alencar Castelo Branco"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />
        <SimpleBookItem2
          title="Recinto do Elogio e da Crítica"
          author="Claúdia Cristina da Silva Fontineles"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />
        <SimpleBookItem2
          title="A Letra e o tempo"
          author="Pedro Pio Fontinelles FIlho"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />
        <SimpleBookItem2
          title="Praticando espaços, entre acordes, letras e máscaras"
          author="Raimundo Nonato Lima dos Santos"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />
        <SimpleBookItem2
          title="Teatro Dialógico"
          author="Francisco de Assis de Sousa Nascimento"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />
        <SimpleBookItem2
          title="Construindo a hegemonia na Alta Idade Média"
          author="João Paulo Charrone"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />
        <SimpleBookItem2
          title="Discursos, retórica e poder na Antiguidade Tardia"
          author="José Petrúcio de Farias Júnior"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />
        <SimpleBookItem2
          title="É que Glauber Acha Frio o que não é espelho "
          author="Frederico Osanan Amorim Lima"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />




      </Collapsible>

      <Collapsible title="Dissertações de Mestrado">
        <SimpleBookItem2
          title="A importância da borracha da maniçoba na economia do Piauí"
          author="Teresinha Queiroz"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />

        <SimpleBookItem2
          title="Revolução de 1930 no Piauí"
          author="Francisco Alcides do Nascimento"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />

        <SimpleBookItem2
          title="Mulheres Plurais"
          author="Pedro Vilarinho Castelo Branco"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />

        <SimpleBookItem2
          title="Um grande dever nos chama"
          author="Johny Santana de Araújo"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />

        <SimpleBookItem2
          title="Múltiplas e Singulares"
          author="Elizângela Barbosa Cardoso"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />

        <SimpleBookItem2
          title="Desafiando o olhar da medusa"
          author="Pedro Pio Fontineles Filho"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />

        <SimpleBookItem2
          title="Invisíveis asas das ondas ZYQ 3"
          author="Nilsângela Cardoso Lima"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />

        <SimpleBookItem2
          title="Torquato Neto e seus contemporâneos"
          author="Fábio Leonardo Castelo Branco Brito"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />

        <SimpleBookItem2
          title="Curto-circuitos na sociedade disciplinar"
          author="Frederico Osanan Amorim Lima"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />

        <SimpleBookItem2
          title="História, memória e identidade"
          author="Raimundo Nonato Lima dos Santos"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />

        <SimpleBookItem2
          title="A Cidade e o meretrício"
          author="Francisco Gleison da Costa Monteíro"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />

        <SimpleBookItem2
          title="Entre letras e bordados"
          author="Joseane Zingleara Soares Marinho"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />

        <SimpleBookItem2
          title="Sofistas e filósofos na administração imperial "
          author="José Petrúcio de Farias Júnior"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />

        <SimpleBookItem2
          title="A imagem da autoridade episcopal no período merovíngio através da Vita Sancri Marcelli e demais Vitae"
          author="Vanâncio Fortunato de João Paulo Charrone"
          url="http://repositorio.ufpi.br/handle/123456789/191"
        />

        <SimpleBookItem2
          title="O Ensino de História em Teresina"
          author="Edwar Castelo Branco"
          url="http://repositorio.ufpi.br/handle/123456789/191"
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
  justifiedText: {
    textAlign: "justify",
    lineHeight: 20,
  },
});
