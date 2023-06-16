import * as React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Text, Pressable, SafeAreaView, ScrollView, StatusBar, Linking, Image } from 'react-native';
import { Button } from 'react-native-paper';

export function SobreMaria({ navigation }) {
  const handleContactPress = () => {
    Linking.openURL('https://web.whatsapp.com/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <KeyboardAvoidingView style={styles.background}>
          <View style={styles.container}>
            <Text style={styles.titulo}>Maria Auxiliadora</Text>
            <Image
            source={{
              uri: 'https://i.postimg.cc/dt4XdNgv/c9b42a23dead99bb980eed9245ce1986.jpg"',
            }}
            style={styles.imagem}
          />
            <Text style={styles.texto}>
              Sou formada em Psicologia há 16 anos. Atendo guiada na terapia cognitiva comportamental. Acredito que a
              psicologia pode ajudar todas as pessoas que sofrem, e no atual momento que vivemos, todos estamos sofrendo.
              Não podemos desistir, precisamos ser fortes, sempre existe uma solução para os problemas, e isso depende do
              nosso ponto de vista e da maneira como nos relacionamos com as pessoas. Se você está passando por um momento
              difícil, estou aqui para lhe ouvir, quem sabe juntos encontramos uma maneira de viver melhor. Estou com agenda
              aberta para consultas para pessoas que precisam de atendimento imediato, no período diurno.
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

export default SobreMaria;