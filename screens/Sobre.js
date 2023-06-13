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
      <Text style={styles.texto}>O TherapyCare é um aplicativo criado para que a/o paciente
      possa perceber a presença de um possível nódulo e se o mesmo é benigno ou malígno,
      podendo assim ter uma certa prevenção e buscar ajuda médica o quanto antes.
      A ideia surgiu a partir de quatro estudantes
      que precisavam desenvolver um aplicativo para as disciplinas de
      Inteligência Artificial, Programação para Dispositivos Móveis e 
      Aplicação Orientada a Serviços.</Text>
      
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
      backgroundColor: '#533D8B',
      width: '90%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginBottom: 10,
    },
  
    botaoCriarConta: {
      backgroundColor: '#533D8B',
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