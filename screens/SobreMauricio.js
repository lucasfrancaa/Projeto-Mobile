import * as React from 'react';

import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Text, 
  Pressable, SafeAreaView, ScrollView, StatusBar, Linking
} from 'react-native';

export function SobreMauricio({navigation}) {

  const linkExt = (() => {
    Linking.openURL('https://web.whatsapp.com/');
  })

    return (
      <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
      <Text style={styles.titulo}>Mauricio Sardá</Text>
      <Text style={styles.texto}>Atuo a partir da abordagem psicanalítica,
      tendo experiência com transtornos de ansiedade, depressão, problemas
      de autoestima, público LGBTQIA+ e pessoas com deficiência. Atendo 
      homens e mulheres que buscam se entender melhor e conquistar maior 
      qualidade de vida. A partir das sessões terapêuticas o paciente passa
      a desenvolver ferramentas para enfrentamento de problemas e resolução
      do sofrimento mental. Iniciei minha atuação com aconselhamento aos 
      pais em período pandêmico, auxiliando com as mudanças e dificuldades
      que enfrentam na criação de seus filhos, a partir dos anseios apresentados,
      depois iniciei o acompanhamento a pessoas com deficiência buscando melhora
      na qualidade de vida, lidando com problemas diários como habilidades sociais,
      trabalho e sexualidade e posteriormente iniciei o atendimento com foco ao público
      LGBTQIA+, onde trabalhamos questões profissionais, pessoais e sexuais, assim como
      os preconceitos e dificuldades que encontram no dia a dia, a fim de resolver paradigmas
      que causam sofrimento.
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