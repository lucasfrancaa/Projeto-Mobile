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
  Keyboard, 
  Alert
} from 'react-native';
import useSWR from 'swr';


export function Cadastro({navigation}) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

 const { mutate } = useSWR('https://java-unicap-production.up.railway.app/users');
 
  const handleSignUp = async () => {
    try {
      await fetch('https://java-unicap-production.up.railway.app/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, password }),
      });

      Alert.alert('Success', 'User registered successfully');
      mutate(); 
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to register user');
    }
  };

  const handleSignupAndNavigation = () => {
    handleSignUp(); 
    navigation.navigate('Login'); 
  };

  const handleInputSubmit = () => {
    Keyboard.dismiss();
  };

    return (
  
      <KeyboardAvoidingView style={styles.background}>
  
        <View style={styles.container}>
          <TextInput
            style={styles.TextInput}
            placeholder="nome"
            autoCorrect={false}
            value={name}
            onChangeText={setName}
            onSubmitEditing={handleInputSubmit}
        />

        <TextInput
            style={styles.TextInput}
            placeholder="telefone"
            autoCorrect={false}
            value={phone}
            onChangeText={setPhone}
            keyboardType="numeric"
            textInputProps={{ numericOnly: true }}
            onSubmitEditing={handleInputSubmit}
        />

        <TextInput
            style={styles.TextInput}
            placeholder="e-mail"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
            onSubmitEditing={handleInputSubmit}
          />

        <TextInput
            style={styles.TextInput}
            placeholder="senha"
            autoCorrect={false}
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={handleInputSubmit}
            secureTextEntry
          />
  
          <Pressable style={styles.botaoCriarConta} onPress={handleSignupAndNavigation} disabled={!email || !password || !name || !phone}>
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