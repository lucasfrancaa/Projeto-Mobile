import * as React from 'react';

import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Text, 
  Pressable,
  SafeAreaView,
  ScrollView,
  Linking
} from 'react-native';

export function SobreFabio({navigation}) {

  const linkExt = (() => {
    Linking.openURL('https://web.whatsapp.com/');
  })

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
      <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
      <Text style={styles.titulo}>Fábio Andrade</Text>
      <Text style={styles.texto}>Sou psicólogo clínico há 20 anos. Trabalho com jovens adultos e idosos.
Minha linha é voltada para trabalhar os sentimentos: Amor, ódio, excesso de ciúmes, invejas, medos, dentre outros, além de ansiedade e depressão . Já fiz alguns cursos e trabalho também com pessoas enlutadas desde a perda por morte como o termino de um relacionamento.
Pessoas que tem ideias suicidas bem como a automutilação também são ajudadas a ver o mundo por outra ótica. Ultimamente venho trabalhando com um membro da família ou seus familiares que estão na luta contra o câncer
Se vc está passando por algum destes problemas, não se sinta só. Estou aqui para ajudar você
      </Text>
      
      <Pressable style={styles.botaoVoltar} onPress={(linkExt) }>
          <Text style={styles.botaoTextoVoltar}>contato</Text>
      </Pressable>

      <Pressable style={styles.botaoVoltar} onPress={() => navigation.navigate('TerapiaLista')}>
          <Text style={styles.botaoTextoVoltar}>voltar</Text>
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
      marginBottom: 50
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

  botaoVoltar: {
    backgroundColor: '#533D8B',
    width: '50%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 0,
    marginBottom:15
  },

  botaoTextoVoltar:{
    marginBottom: 0,
    color: '#fff',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
},

  botaoContato: {
    backgroundColor: '#533D8B',
    width: '50%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10,
  },
  });