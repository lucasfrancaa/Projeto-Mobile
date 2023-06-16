import * as React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Text, Pressable, SafeAreaView, ScrollView, StatusBar, Linking, Image } from 'react-native';
import { Button } from 'react-native-paper';

export function SobreJulia({ navigation }) {
  const handleContactPress = () => {
    Linking.openURL('https://web.whatsapp.com/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <KeyboardAvoidingView style={styles.background}>
          <View style={styles.container}>
            <Text style={styles.titulo}>Julia Benzaquen</Text>
            <Image
            source={{
              uri: 'https://i.postimg.cc/SxBxFGk0/mulher-lider.jpg"',
            }}
            style={styles.imagem}
          />
            <Text style={styles.texto}>
            Me chamo Julia, sou psicóloga clínica e
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

            <Button
              mode="contained"
              style={styles.botaoContato}
              onPress={handleContactPress}
            >
              Contato
            </Button>

            <Button
              mode="contained"
              style={styles.botaoVoltar}
              onPress={() => navigation.navigate('TerapiaLista')}
            >
              Voltar
            </Button>
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
    marginBottom: 100,
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 15,
    marginBottom: 30,
  },
  texto: {
    fontSize: 15,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'justify',
    marginBottom: 30,
  },
  botaoVoltar: {
    backgroundColor: '#533D8B',
    width: '50%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 0,
    marginBottom: 15,
  },
  botaoContato: {
    backgroundColor: '#533D8B',
    width: '50%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 15,
  },
});

export default SobreJulia;