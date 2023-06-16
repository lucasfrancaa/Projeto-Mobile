import * as React from 'react';

import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Text, 
  Pressable,
  SafeAreaView, ScrollView, StatusBar
} from 'react-native';

export function SobreMaria({navigation}) {
    return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
      <Text style={styles.titulo}>Maria Auxiliadora</Text>
      <Text style={styles.texto}>Sou formada em Psicologia há 16 anos.
      Atendo guiada na terapia cognitiva comportamental. Acredito que a
      psicologia pode ajudar todas as pessoas que sofrem, e no atual momento
      que vivemos, todos estamos sofrendo. Não podemos desistir, precisamos
      ser fortes, sempre existe uma solução para os problemas, e isso depende
      do nosso ponto de vista e da maneira como nos relacionamos com as pessoas.
      Se você está passando por um momento difícil, estou aqui para lhe ouvir,
      quem sabe juntos encontramos uma maneira de viver melhor. Estou com agenda
      aberta para consultas para pessoas que precisam de atendimento imediato, no
      período diurno.
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