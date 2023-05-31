import * as React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Image,
  Button,
  Pressable,
  Text
} from 'react-native';

export function Cadastro({navigation}) {
    return (
  
      <KeyboardAvoidingView style={styles.background}>
  
        <View style={styles.container}>
          <TextInput
            style={styles.TextInput}
            placeholder="nome"
            autoCorrect={false}
            onChangeText={() => {}}
        />
  
        <TextInput
            style={styles.TextInput}
            placeholder="cpf"
            autoCorrect={false}
            onChangeText={() => {}}
        />

        <TextInput
            style={styles.TextInput}
            placeholder="data de nascimento"
            autoCorrect={false}
            onChangeText={() => {}}
        />

        <TextInput
            style={styles.TextInput}
            placeholder="e-mail"
            autoCorrect={false}
            onChangeText={() => {}}
          />

<TextInput
            style={styles.TextInput}
            placeholder="senha"
            autoCorrect={false}
            onChangeText={() => {}}
          />
  
          <Pressable style={styles.botaoCriarConta} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textoBotaoCadastrar}>criar conta</Text>
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
  
    containerLogo: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
  
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
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
    },
  
    textoBotaoCadastrar:{
        marginBottom: 0,
        color: '#fff',
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
    },
  
    TextInput: {
      backgroundColor: '#fff',
      width: '90%',
      marginBottom: 15,
      borderWidth : 1,
      borderRadius: 15,
      fontSize: 17,
      borderColor: '#000',
      padding: 10,
    },
  
    titulo: {
      color: '#000',
      justifyContent: 'center',
      marginTop: 10,
      fontSize: 20,
    },
  });