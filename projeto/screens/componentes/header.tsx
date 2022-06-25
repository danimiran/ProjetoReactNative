import { View } from "../../components/Themed";
import { StyleSheet, Text } from "react-native";
import React from "react";
import { IconUser } from "./IconUser";

export function Header({ titulo }: { titulo: any }) {
  return (
    <View style={style.topo}>
      <View style={style.icone}>
        <IconUser tamanho={70} />
    
      </View>

     
      <View style={style.container}>
        <Text style={style.titulo}> {titulo} </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height: 140,
    width: 359,
    marginTop: -35,
    backgroundColor: "#A9A7F4",
    justifyContent: "center",
    alignItems: "center"
  },

  icone: {
    backgroundColor: "rgba(0,0,0,0)",
    shadowColor: "rgba(0,0,0,0)",
    elevation: 4,
    alignItems: "center",
    zIndex: 4,
  },

  titulo: {
    zIndex: 4,
    elevation: 4,
    color: "#F5F5F5",
    fontSize: 20,
    fontWeight: "900",
  },

  topo: {
    paddingTop: 70,
    backgroundColor: "#E2E1FF",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  }
});
