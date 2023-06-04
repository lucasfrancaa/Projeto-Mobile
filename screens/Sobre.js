import * as React from 'react';

import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Text, 
  Pressable
} from 'react-native';



export function Sobre({navigation}) {
    return (
      <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
      <Text style={styles.titulo}>SOBRE NÓS</Text>
      <Text style={styles.texto}>O cuidaMama é um aplicativo para etc e tem
      a finalidade de etc. Surgiu a partir da ideia de três estudantes
      que precisavam desenvolver um aplicativo para as disciplinas de
      Inteligência Artificial, Programação para Dispositivos Móveis e 
      Aplicação Orientada a Serviços. O intuito é etc etc.. </Text>
      
      <Pressable style={styles.botaoEntrar} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textoBotaoEntrarOuCadastrar}>login</Text>
      </Pressable>
      
      <Pressable style={styles.botaoCriarConta} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.textoBotaoEntrarOuCadastrar}>cadastrar</Text>
      </Pressable>
      </View>
      </KeyboardAvoidingView>
      );
  }
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
    },
    titulo: {
      fontSize: 40,
      fontWeight: "bold",
      textAlign: 'center',
      marginTop: 25
    },
    texto:{
      fontSize: 15,
      marginTop: 20,
      marginLeft: 15,
      marginRight: 15,
      textAlign: 'justify',
      marginBottom: 30,
    },
    botaoEntrar: {
      backgroundColor: '#7e325f',
      width: '90%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginBottom: 10,
    },
  
    botaoCriarConta: {
      backgroundColor: '#7e325f',
      width: '90%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginBottom: 10,
      marginTop: 10,
      marginLeft: 18,
      marginRight: 15,
    },
    textoBotaoEntrarOuCadastrar:{
      marginBottom: 0,
      color: '#fff',
      fontSize: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 7
  },
  });