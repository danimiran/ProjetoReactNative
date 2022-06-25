import { ScrollView, StyleSheet, Text } from "react-native";
import { View } from "../components/Themed";

import { RootTabScreenProps } from "../types";
import Icone from "./componentes/icone";
import { IconUser } from "./componentes/IconUser";

export default function Perfil({ navigation }: RootTabScreenProps<"Perfil">) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <IconUser tamanho={100} />
        <Text style={styles.titulo}>Daniela Miranda de Almeida</Text>
        <Text style={styles.subtitulo}>Desenvolvedora em formação</Text>
      </View>
      <Text style={styles.title}>Sobre</Text>
      <Text style={styles.conteudo}>
        Estudante de Análise e Desenvolvimento de Sistemas do centro
        universitario Eniac. Atualmento estou no 5 º Semestre do curso, com
        previsão de formação para o final de 2022.
      </Text>
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.conteudo}>Me siga nas redes sociais!</Text>

      <View style={styles.row}>
        <Icone titulo={"Intagram"} nomeIcone={"instagram-square"} url={"https://www.instagram.com/"} />
        <Icone titulo={"GitHub"} nomeIcone={"github"} url={"https://github.com/danimiran"}/>
        <Icone titulo={"Linkedin"} nomeIcone={"linkedin"} url={"https://br.linkedin.com/in/danielamirandaalmeida"}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
  row: {
    flexDirection: "row",
    marginTop: 20,
  },

  header: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "#A9A7F4",
    height: 316,
    shadowColor: "rgba(0, 0, 0, 0.9)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    alignItems: "center",
    justifyContent: "center"
  },

  title: {
    fontSize: 25,
    color: "#666599",
    fontWeight: "600",
    marginTop: 50,
    marginLeft: 10,
    marginBottom: 20,
  },

  titulo:{
    color: "#F5F5F5",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 5,
    marginTop: 15
  },
  subtitulo:{
    color: "#F5F5F5",
  },

  conteudo: {
    marginLeft: 10,
    textAlign: "justify",
    marginRight: 10,
    fontSize: 16,
    color: "#585858",
    lineHeight: 26,
  },
});
