import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Image,
  Button,
  Pressable,
  Text, 
  Alert, 
  Keyboard
} from 'react-native';
import api from '../api';
import axios from 'axios';

export function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:8080/users/login', {
  //       email,
  //       password,
  //     });

  //     if (email && password && response.status === 200) {
  //       Alert.alert('Success', 'Logged in successfully');
  //     } else {
  //       Alert.alert('Error', 'Please enter email and password');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     Alert.alert('Error', 'An error occurred');
  //   }
  // };

  const handleLogin = async () => {
    try {
      const response = await api.post('/users/{id}', {
        email,
        password,
      });
      if (response.status === 200) {
        Alert.alert('Success', 'User registered in successfully');
      } else {
        Alert.alert('Error', 'Failed to register user');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred');
    }
  };


    const handleLoginAndNavigation = () => {
      handleLogin(); 
      navigation.navigate('Upload'); 
    };

    const handleInputSubmit = () => {
      Keyboard.dismiss();
    };

    return (
  
      <KeyboardAvoidingView style={styles.background}>
  
        <View style={styles.containerLogo}>
          <Image
            source={{
              uri: 'https://i.imgur.com/hzerc40.png',
            }}
            style={{ width: 100, height: 100 }}
          />
          <Text style={styles.titulo} variant="headlineLarge">
          therapyCare
          </Text>
        </View>
  
        <View style={styles.container}>
          <TextInput
            style={styles.TextInput}
            placeholder="email"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
            onSubmitEditing={handleInputSubmit}
          />
  
          <TextInput
            style={styles.TextInput}
            placeholder="senha"
            autoCorrect={false}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={handleInputSubmit}
          />
  
          <Pressable style={styles.botaoEntrar} onPress={handleLoginAndNavigation}  disabled={!email || !password}>
            <Text style={styles.textoBotaoEntrarOuCadastrar}>entrar</Text>
          </Pressable>
  
          <Pressable style={styles.botaoCriarConta} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.textoBotaoEntrarOuCadastrar}>cadastrar</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    );
  };
  
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
      marginTop: 50,
    },
  
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
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
    },
  
    textoBotaoEntrarOuCadastrar:{
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