import * as React from 'react';

import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Text, 
  Pressable,
  SafeAreaView, ScrollView, StatusBar
} from 'react-native';

export function SobreJulia({navigation}) {
    return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
      <Text style={styles.titulo}>Julia Benzaquen</Text>
      <Text style={styles.texto}>Me chamo Julia, sou psicóloga clínica e
      mestra em psicologia formada pela Universidade Federal de Alagoas,
      e atuo no atendimento a adolescentes, adultos e idosos a partir da
      Psicanálise. Possuo experiência em atendimento psicológico on-line
      e presencial a pessoas com quadros de ansiedade, depressão, problemas
      familiares e/ou de relacionamentos, problemas ocupacionais, reação aguda
      ao stress, luto e perdas, traumas, pessoas que se encontram em situação
      de risco, pessoas em sofrimento emocional, dependência emocional e questões
      de autoaceitação e autoestima. 
      Me encontro à disposição para te escutar de maneira livre de julgamentos,
      para que possamos trabalhar juntos no que precise.
      </Text>
      
      <Pressable onPress={() => navigation.navigate('TerapiaLista')}>
            <Text>voltar</Text>
      </Pressable>
      
      </View>
      </KeyboardAvoidingView>

      </ScrollView>
    </SafeAreaView>
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
      width: '100%',
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