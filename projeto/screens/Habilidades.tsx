import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Header } from './componentes/header';

export default function Habilidades() {
  return (
    <View style={styles.container}>
    <Header titulo={"Habilidades"} />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
