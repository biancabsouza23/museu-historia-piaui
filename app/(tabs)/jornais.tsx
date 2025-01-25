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
            url="https://drive.google.com/file/d/1pM3JZRubb8a_KF6mb2Su3QgM7siHWr0T/preview"
          />
        </Collapsible>
        <Collapsible title="Periódicos de 1968">
          <SimpleBookItem
            title="Junho de 1968"
            url="https://drive.google.com/file/d/18_4WEBd2Sda5cB835i9tIZERvPlMS9GF/preview"
          />
          <SimpleBookItem
            title="Julho de 1968"
            url="https://drive.google.com/file/d/16JF-2RAVB2AR4v_7cb7oQbJgDJYD6Sj8/preview"
          />
          <SimpleBookItem
            title="Outubro de 1968"
            url="https://drive.google.com/file/d/1pns_RXfsag2PNTPvo_D9QhZ2vdd9cWxE/preview"
          />
          <SimpleBookItem
            title="Novembro de 1968"
            url="https://drive.google.com/file/d/1YC3H9NDkIEix4DYbchuJeN_9MSjB-F-N/preview"
          />
          <SimpleBookItem
            title="Dezembro de 1968"
            url="https://drive.google.com/file/d/17gVsjhw_8qR6afLLzfxbPkEFo1OwP6Vv/preview"
          />
        </Collapsible>
        <Collapsible title="Periódicos de 1969">
          <SimpleBookItem
            title="Janeiro de 1969"
            url="https://drive.google.com/file/d/1JBtUm-b-0FW7kqWS3zoSgAtdHiLxyQEq/preview"
          />
          <SimpleBookItem
            title="Março de 1969"
            url="https://drive.google.com/file/d/18Yj_7QvTb8CROuw66P45hrdt81HOHE1p/preview"
          />
          <SimpleBookItem
            title="Abril de 1969"
            url="https://drive.google.com/file/d/1M19wYlq3lveIih4LoRiQpAn65JQBbKQi/preview"
          />
          <SimpleBookItem
            title="Maio de 1969"
            url="https://drive.google.com/file/d/1P_NE8Rx4rMdYS-WBJHCQvsoCviCS3bSE/preview"
          />
          <SimpleBookItem
            title="Dezembro de 1969"
            url="https://drive.google.com/file/d/1eyyz5viLNhWb9zdhyqTKYqXAJ8azTc1Y/preview"
          />
        </Collapsible>
        <Collapsible title="Periódicos de 1970">
          <SimpleBookItem
            title="Maio de 1970"
            url="https://drive.google.com/file/d/1dG6Ay00EqAnQIJ4QjqcSgXrJwuwhC5qD/preview"
          />
          <SimpleBookItem
            title="Julho de 1970"
            url="https://drive.google.com/file/d/1YOsjMfYAc5KCBKDhOax9z7zRQRnlb1-2/preview"
          />
          <SimpleBookItem
            title="Agosto de 1970"
            url="https://drive.google.com/file/d/1s-qW94Xwjcesuy5smyouecfDP3zL8g4q/preview"
          />
          <SimpleBookItem
            title="Setembro de 1970"
            url="https://drive.google.com/file/d/1I1oAtg5dXkPDdaiNFJ30oKCg_5dpi5pY/preview"
          />
          <SimpleBookItem
            title="Novembro de 1970"
            url="https://drive.google.com/file/d/1lc1ic37Bh0NSRmVlBboT-vfMnWdMRa6A/preview"
          />
          <SimpleBookItem
            title="Dezembro de 1970"
            url="https://drive.google.com/file/d/1jVL4y5KvgUl6gJeQcBAJ53Nd1nTAOgVk/preview"
          />
        </Collapsible>
        <Collapsible title="Periódicos de 1971">
          <SimpleBookItem
            title="Janeiro de 1971"
            url="https://drive.google.com/file/d/1H0-EyGhqdEFNdSZLwVN2VVQ6JFt-NbzN/preview"
          />
          <SimpleBookItem
            title="Fevereiro de 1971"
            url="https://drive.google.com/file/d/18D_nHi40hf0oKD7QlQqU_ma4aqSTN6w8/preview"
          />
          <SimpleBookItem
            title="Março de 1971"
            url="https://drive.google.com/file/d/1xUZy4wZPE6O0b_RsnZAOPLtOrKiWjByB/preview"
          />
          <SimpleBookItem
            title="Abril de 1971"
            url="https://drive.google.com/file/d/1T6jA2ltktZdzuKbCTDlWnS1lecoDP1VO/preview"
          />
          <SimpleBookItem
            title="Maio de 1971"
            url="https://drive.google.com/file/d/1UxONr557QJw-SfsA_2DDUQ0CoVQl9d8Y/preview"
          />
          <SimpleBookItem
            title="Novembro de 1971"
            url="https://drive.google.com/file/d/1mpRf95IFsq6gwZU9wt49lMOflALOVe4k/preview"
          />
        </Collapsible>
        <Collapsible title="Periódicos de 1976">
          <SimpleBookItem
            title="Fevereiro de 1976"
            url="https://drive.google.com/file/d/1NDgpUZm0Iwh4XCBv-iFysb5yZUhI666z/preview"
          />
          <SimpleBookItem
            title="Novembro de 1976"
            url="https://drive.google.com/file/d/1iVna4vtfVDAH05rKHdpfmoBnjloErzb_/preview"
          />
          <SimpleBookItem
            title="Dezembro de 1976"
            url="https://drive.google.com/file/d/1Fc0q8x0ODEox9Evn0-l-6z76IKqVUjEY/preview"
          />
        </Collapsible>
        <Collapsible title="Periódicos de 1977">
          <SimpleBookItem
            title="Fevereiro de 1977"
            url="https://drive.google.com/file/d/1JSzrQtNmKLS9ZKdBB-SOyidopb-RUIJY/preview"
          />
          <SimpleBookItem
            title="Março de 1977"
            url="https://drive.google.com/file/d/13xQdH00fgB4MjXgfBh0TS7qASQk8H79b/preview"
          />
          <SimpleBookItem
            title="Abril de 1977"
            url="https://drive.google.com/file/d/1qkrmI97rWj051AG1vHxMiYerGLGr4vcU/preview"
          />
          <SimpleBookItem
            title="Junho de 1977"
            url="https://drive.google.com/file/d/1Wkz-6YdW72VJuD-sY_vRqeggOZgsIl7Q/preview"
          />
          <SimpleBookItem
            title="Julho de 1977"
            url="https://drive.google.com/file/d/15ZjqCrOcRDtiIfoaFRzt7PtEbi9KHcSU/preview"
          />
          <SimpleBookItem
            title="Agosto de 1977"
            url="https://drive.google.com/file/d/1BWxNND400t3fHsBlqO-ySxMLfhgHGQ47/preview"
          />
          <SimpleBookItem
            title="Setembro de 1977"
            url="https://drive.google.com/file/d/1h1q8qz7s9H7qI1-05kkUy0xy7bMvOzwg/preview"
          />
        </Collapsible>
        <Collapsible title="Periódicos de 1978">
          <SimpleBookItem
            title="Junho de 1978"
            url="https://drive.google.com/file/d/1_TtVyZqFYWMdDA1dKSFx81tjPHLttU7U/preview"
          />
          <SimpleBookItem
            title="Julho de 1978"
            url="https://drive.google.com/file/d/116EHtTjYRYgz9qItxQZYku7t_v5PMWR4/preview"
          />
          <SimpleBookItem
            title="Agosto de 1978"
            url="https://drive.google.com/file/d/1hndOmYDUK0APIBmy2aZz7-RnoDu0fikw/preview"
          />
          <SimpleBookItem
            title="Setembro de 1978"
            url="https://drive.google.com/file/d/18_GDX6sMPtdUc2H-jW5WS2dc3yuIawSh/preview"
          />
        </Collapsible>
        <Collapsible title="Periódicos de 1979">
          <SimpleBookItem
            title="Julho de 1979"
            url="https://drive.google.com/file/d/1-h1i59Do4lSgNNEm-XaeYfLpTjghxrBz/preview"
          />
          <SimpleBookItem
            title="Agosto de 1979"
            url="https://drive.google.com/file/d/1nBlgbffSgvsIjsOo-GAB4bfIu23opDcz/preview"
          />
          <SimpleBookItem
            title="Setembro de 1979"
            url="https://drive.google.com/file/d/1Y4XAnSH6MAQEstz1oeBE3zrtyFEXbLq_/preview"
          />
        </Collapsible>
      </Collapsible>

      <Collapsible title="A Hora">
        <Collapsible title="Periódicos de 1972">
          <SimpleBookItem
            title="Janeiro de 1972"
            url="https://drive.google.com/file/d/1_8U4d4GSUK7kuhWDdyGd9_B1fFana7_4/preview"
          />
          <SimpleBookItem
            title="Maio de 1972"
            url="https://drive.google.com/file/d/1D88aET0OUMx4swpfS0KmL1kUmJ3N52Ai/preview"
          />
          <SimpleBookItem
            title="Julho de 1972"
            url="https://drive.google.com/file/d/1l6bXtjJASyUlsUYX8yZlmxc2Q1d1x7hM/preview"
          />
          <SimpleBookItem
            title="Setembro de 1972"
            url="https://drive.google.com/file/d/146x1l-bwoVJF7aDVF8fQZphSbjhvtw_A/preview"
          />
        </Collapsible>
        <Collapsible title="Periódicos de 1973">
          <SimpleBookItem
            title="Janeiro de 1973"
            url="https://drive.google.com/file/d/1dCuyOAKsdUocuG1_3Q91yQTrBDTmTciv/preview"
          />
          <SimpleBookItem
            title="Fevereiro de 1973"
            url="https://drive.google.com/file/d/1Ize-Ufg8TiMKe0ZPPoBxFYWmNr24uFXL/preview"
          />
          <SimpleBookItem
            title="Março de 1973"
            url="https://drive.google.com/file/d/1cHxX4FkfbmJ261PymqIcVoNGMWZjKs2Q/preview"
          />
        </Collapsible>
        <Collapsible title="Periódicos de 1974">
          <SimpleBookItem
            title="Maio de 1974"
            url="https://drive.google.com/file/d/12tefY2hpbh9CMj1Orutf-I2NCVvq6lpE/preview"
          />
          <SimpleBookItem
            title="Junho de 1974"
            url="https://drive.google.com/file/d/1PFiFgEZGYOFQLLXtO5qnN72rhPkr6Y1F/preview"
          />
          <SimpleBookItem
            title="Julho de 1974"
            url="https://drive.google.com/file/d/16l1hDR-0KJkzlnjy8fUrqbu5IgmcoovS/preview"
          />
          <SimpleBookItem
            title="Agosto de 1974"
            url="https://drive.google.com/file/d/1sRx3uqGh28qta92zd0rSD4VDLTJtpTP6/preview"
          />
          <SimpleBookItem
            title="Setembro de 1974"
            url="https://drive.google.com/file/d/1owwVnDlT7zJ0ilWZ_r0uoXm65WQBLTFt/preview"
          />
        </Collapsible>
      </Collapsible>

      <Collapsible title="O Dia">
        <ThemedText style={styles.justifiedText}>
          Neste tópico, disponibilizamos o acervo que temos disponível do jornal
          O Dia do Piauí, nos anos de 1953-1957; 1960-1965;1969;1973-1979. Por causa
          do grande números de páginas desse periódico, por também ser diário, resolvemos
          digitalizar os assuntos referentes a política, cultura, educação e referente
          a problemas sociais. Separados em anos e em meses. Conseguimos acesso a esse
          acervo através da consulta e manuseio dos periódicos disponibilizados no
          Arquivo Público do Estado do Piauí.
        </ThemedText>
        <Collapsible title="Periódicos de 1952">
          <SimpleBookItem
            title="Janeiro de 1952"
            url="https://drive.google.com/file/d/187Si7u2SHXn3UtMwVezFEAH61LSKualE/preview"
          />
          <SimpleBookItem
            title="Fevereiro de 1952"
            url="https://drive.google.com/file/d/1hVvQJS0zl8WXK_x2Ce8W_9XB29RzJD8l/preview"
          />
          <SimpleBookItem
            title="Março de 1952"
            url="https://drive.google.com/file/d/1FKBnKM3hBA5RqmQqak8FLSbTa79UX6Ue/preview"
          />
          <SimpleBookItem
            title="Abril de 1952"
            url="https://drive.google.com/file/d/1Ha4u2zevt09yDC3qKvL1SyJqwba1PjOY/preview"
          />
          <SimpleBookItem
            title="Maio de 1952"
            url="https://drive.google.com/file/d/1wKyt9DLECGN8crbFGwa_S2zAK9raiC7E/preview"
          />
          <SimpleBookItem
            title="Junho de 1952"
            url="https://drive.google.com/file/d/14c_0G2yKg7SSRfksjDDO6u9kUQpVl7AE/preview"
          />
          <SimpleBookItem
            title="Julho de 1952"
            url="https://drive.google.com/file/d/1LH4rnyYe1N16771_XufE7YBhYj2aZvE6/preview"
          />
          <SimpleBookItem
            title="Agosto de 1952"
            url="https://drive.google.com/file/d/1djxvBc3SAvH8EYz4TZHNAka7lcwk9Jhu/preview"
          />
          <SimpleBookItem
            title="Setembro de 1952"
            url="https://drive.google.com/file/d/1djxvBc3SAvH8EYz4TZHNAka7lcwk9Jhu/preview"
          />
          <SimpleBookItem
            title="Outubro de 1952"
            url="https://drive.google.com/file/d/1xVd8m4jgWNyJrxiwLRnYwY8zq_RQ48tz/preview"
          />
          <SimpleBookItem
            title="Novembro de 1952"
            url="https://drive.google.com/file/d/1xNHEb4YxLpAcj-o0fwGbzLTDdKAPjJUx/preview"
          />
          <SimpleBookItem
            title="Dezembro de 1952"
            url="https://drive.google.com/file/d/1m-61mv6ZylNX5WbThcbuMWe8z7FE0-7q/preview"
          />

        </Collapsible>
        <Collapsible title="Periódicos de 1953">
          <SimpleBookItem
            title="Janeiro de 1953"
            url="https://drive.google.com/file/d/1_VfOky4EvM7UG6Sxa_lWCK7_QBB65Xxr/preview"
          />
          <SimpleBookItem
            title="Fevereiro de 1953"
            url="https://drive.google.com/file/d/1fyRBjkRBJkjBrBy17OTBhMhs6W3CRkBC/preview"
          />
          <SimpleBookItem
            title="Março de 1953"
            url="https://drive.google.com/file/d/1JQsTB-SRuTe0ugDfd8TCWo8cTAh6DeNJ/preview"
          />
          <SimpleBookItem
            title="Abril de 1953"
            url="https://drive.google.com/file/d/197_YqJFtPe-A4BQgAnZikJUhqFESQYwP/preview"
          />
          <SimpleBookItem
            title="Maio de 1953"
            url="https://drive.google.com/file/d/1zf7ssRSOa19mWt3sNVWnB2gVecdOR2Z3/preview"
          />
          <SimpleBookItem
            title="Junho de 1953"
            url="https://drive.google.com/file/d/1Mi7ruvV_fd184TmZpfUpaiPDtc54_dQ8/preview"
          />
          <SimpleBookItem
            title="Setembro de 1953"
            url="https://drive.google.com/file/d/18mDpvGAd4wQj1bswfOgbf2bZSJpHdn7Q/preview"
          />
          <SimpleBookItem
            title="Outubro de 1953"
            url="https://drive.google.com/file/d/13rBSjJK2JvqPMdPl8T85z9hq9SCMRCjk/preview"
          />
          <SimpleBookItem
            title="Novembro de 1953"
            url="https://drive.google.com/file/d/1Ot9njkCuuh_UruG-E8S1ZYcUJUBK6b26/preview"
          />
          <SimpleBookItem
            title="Dezembro de 1953"
            url="https://drive.google.com/file/d/16dtLFYjg3jYtocRAw1kC-oDTlwhyh1vq/preview"
          />
        </Collapsible>
        <Collapsible title="Periódicos de 1954">
          <SimpleBookItem
            title="Janeiro de 1954"
            url="https://drive.google.com/file/d/1teQYiOYFyFeZXu_SV2kpKnMoDZyYsKPs/preview"
          />
          <SimpleBookItem
            title="Fevereiro de 1954"
            url="https://drive.google.com/file/d/1NP78-fkb-vw76lQxa-Tg4NUggxUp3R3T/preview"
          />
          <SimpleBookItem
            title="Março de 1954"
            url="https://drive.google.com/file/d/1lOF8Ue3EYW-9ZjBB5zuEKi6LLlIB8q7p/preview"
          />
          <SimpleBookItem
            title="Abril de 1954"
            url="https://drive.google.com/file/d/11lQIuGWHMZLE2VJHwuPhZf9gedk5K-UF/preview"
          />
          <SimpleBookItem
            title="Maio de 1954"
            url="https://drive.google.com/file/d/1gJaze3pXeOUgzbSv5gqKTWeSkqxqtdbt/preview"
          />
          <SimpleBookItem
            title="Junho de 1954"
            url="https://drive.google.com/file/d/1S4BXYvqdzOYB7KfH1itC-mQKzPmsFAJN/preview"
          />
          <SimpleBookItem
            title="Julho de 1954"
            url="https://drive.google.com/file/d/1k_6AL6oBUkQWAXtJbCVqz7lnA6EHSSkj/preview"
          />
          <SimpleBookItem
            title="Agosto de 1954"
            url="https://drive.google.com/file/d/1iIYtTzYmqJwptPl9seNrBbbT3W5EFuZ3/preview"
          />
          <SimpleBookItem
            title="Setembro de 1954"
            url="https://drive.google.com/file/d/1iaaMk5ISuYxmKG-hsT4Fi_A_lkyMA24I/preview"
          />
          <SimpleBookItem
            title="Outubro de 1954"
            url="https://drive.google.com/file/d/1YBvWraNdq_Y3EWQKirgkxSIxZP-xwOYo/preview"
          />
          <SimpleBookItem
            title="10 de Outubro de 1954"
            url="https://drive.google.com/file/d/1I6rDWRv35Id-XAxRkXINkcG5xE18ngH9/preview"
          />
          <SimpleBookItem
            title="Novembro de 1954"
            url="https://drive.google.com/file/d/1SnISH0ysEAqz9f8xSebuigt8NBpeVfG2/preview"
          />
          <SimpleBookItem
            title="Dezembro de 1954"
            url="https://drive.google.com/file/d/1RGbE30PGEy1-zlE-F6Ot9NOiz9Oo4B3t/preview"
          />
        </Collapsible>
        <Collapsible title="Periódicos de 1955">
          <SimpleBookItem
            title="Setembro de 1955"
            url="https://drive.google.com/file/d/1nS2jpxr2pQz9UtZGGTwTm-e_rEoz_mGp/preview"
          />
          <SimpleBookItem
            title="Outubro de 1955"
            url="https://drive.google.com/file/d/12eHuiCN6WTr8RoVDL39cldCVWT7tiGQk/preview"
          />
          <SimpleBookItem
            title="Novembro de 1955"
            url="https://drive.google.com/file/d/1445OICXY-7_g0-QTpkeeNBoCRqQ5KfJf/preview"
          />
          <SimpleBookItem
            title="Dezembro de 1955"
            url="https://drive.google.com/file/d/1JcBps9UIESpF2DAYWHSFmAfjiRxsIKRt/preview"
          />
        </Collapsible>
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
