import { StyleSheet } from "react-native";
import { Card } from "@rneui/base";
import { Text, View } from "../components/Themed";
import { Header } from "./componentes/header";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Habilidades() {
  const data = [
    {
          nome: "Profissional",
          itens: [
            {
              icone: "comment-dots",
              nomeIcone: "Comunicação"
            },
            {
              icone: "clock",
              nomeIcone: "Pontualidade"
            },
            {
              icone: "people-arrows",
              nomeIcone: "Trabalho em equipe"
            }
          ]
    },
    {
 
          nome: "Técnica",
          itens: [
            {
              icone: "php",
              nomeIcone: "PHP"
            },
            {
              icone: "react",
              nomeIcone: "React Native"
            },
            {
              icone: "html5",
              nomeIcone: "HTML"
            }
          ]
    }
  ];
  return (
    <View style={styles.container}>
      <Header titulo={"Habilidades"} />
      {
        data.length > 0 ?
       data.map((dt: any) => (
        <View>
          <Text style={styles.title}>{dt.nome}</Text>
          <Card containerStyle={styles.card}>
            {
               dt.itens.length > 0 ?
              dt.itens.map((item: any) => (
                <View style={styles.row}>
                  <FontAwesome5 name={item.icone} size={50} color="#666599" />
                  <Text style={styles.titleIcon}>sapo</Text>
                </View>
            ))
              : 
              null
          }
          </Card>
        </View>
      ))
      :
      null
    };
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  card: {
    borderBottomRightRadius: 20,
    backgroundColor: "rgba(169, 167, 244, 0.44)",
    borderColor: "rgba(169, 167, 244, 0.44)",
    elevation: 0,
    margin: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#666599",
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },

  row: {
    flexDirection: "row",
    backgroundColor: "rgba(169, 167, 244, 0)",
    alignItems: "center",
  },

  titleIcon: {
    color: "#666599",
    fontWeight: "700",
    marginLeft: 20,
    fontSize: 15,
  },
});
