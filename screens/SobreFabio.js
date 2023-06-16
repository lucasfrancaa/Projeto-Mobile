import * as React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Text, Pressable, SafeAreaView, ScrollView, StatusBar, Linking, Image } from 'react-native';
import { Button } from 'react-native-paper';

export function SobreFabio({ navigation }) {
  const handleContactPress = () => {
    Linking.openURL('https://web.whatsapp.com/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <KeyboardAvoidingView style={styles.background}>
          <View style={styles.container}>
            <Text style={styles.titulo}>Fábio Andrade</Text>
            <Image
            source={{
              uri: 'https://i.postimg.cc/VNdpR9nT/encontrar-um-psicologo.jpg"',
            }}
            style={styles.imagem}
          />
            <Text style={styles.texto}>
            Sou psicólogo clínico há 20 anos. Trabalho com jovens adultos e idosos.
            Minha linha é voltada para trabalhar os sentimentos: Amor, ódio, excesso de ciúmes, invejas, medos, dentre outros, além de ansiedade e depressão . Já fiz alguns cursos e trabalho também com pessoas enlutadas desde a perda por morte como o termino de um relacionamento.
            Pessoas que tem ideias suicidas bem como a automutilação também são ajudadas a ver o mundo por outra ótica. Ultimamente venho trabalhando com um membro da família ou seus familiares que estão na luta contra o câncer
            Se vc está passando por algum destes problemas, não se sinta só. Estou aqui para ajudar você.
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

export default SobreFabio;
  
  