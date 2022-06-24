import { View } from "../../components/Themed";
import { StyleSheet, Text } from "react-native";
import React from "react";
import { IconUser } from "./IconUser";


export function Header({titulo} : { titulo: any}) {
  return (
    <View style= {style.container}>
      <IconUser tamanho={70}/>
      <Text> {titulo} </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderRadius: 100,
    borderWidth: 5,
    backgroundColor: '#A9A7F4'
  },
});
