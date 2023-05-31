import * as React from 'react';

import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Text
} from 'react-native';



export function Sobre({navigation}) {
    return (
      <KeyboardAvoidingView style={styles.background}>
      <View>
      <Text style={styles.titulo}>sobre nós</Text>
      <Text style={styles.texto}>O cuidaMama é um aplicativo para etc e tem
      a finalidade de etc. Surgiu a partir da ideia de três estudantes
      que precisavam desenvolver um aplicativo para as disciplinas de
      Inteligência Artificial, Programação para Dispositivos Móveis e 
      Aplicação Orientada a Serviços. O intuito é etc etc.. </Text>
      </View>
      </KeyboardAvoidingView>
      );
  }
  
  const styles = StyleSheet.create({
    titulo: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: 'center',
      marginTop: 25
    },
    texto:{
      fontSize: 15,
      marginTop: 20,
      marginLeft: 15,
      marginRight: 15,
      textAlign: 'justify'
    }
  });