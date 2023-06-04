import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Text, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export function Upload({navigation}) {
  const [imageUri, setImageUri] = useState(null);

  const selectImage = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        alert('Permissão para acessar a galeria de fotos é necessária!');
        return;
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!pickerResult.cancelled) {
        setImageUri(pickerResult.uri);
      }
    } catch (error) {
      console.log('Erro ao selecionar a imagem:', error);
    }
  };

  const takePhoto = async () => {
    try {
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

      if (permissionResult.granted === false) {
        alert('Permissão para acessar a câmera é necessária!');
        return;
      }

      const pickerResult = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!pickerResult.cancelled) {
        setImageUri(pickerResult.uri);
      }
    } catch (error) {
      console.log('Erro ao tirar a foto:', error);
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.Logo}>
        <Image
          source={{
            uri: 'https://i.imgur.com/pKZDoiX.png',
          }}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.titulo} variant="headlineLarge">
          MamaCare
        </Text>
      </View>

      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}

      <Text style={styles.titulo2}>selecione ou tire uma foto pra que possamos fazer o diagnóstico do seu nódulo</Text>
      
      <Pressable style={styles.botao} onPress={selectImage} >
          <Text style={styles.textoBotao}>selecionar da galeria</Text>
      </Pressable>

      <Pressable style={styles.botao} onPress={takePhoto} >
          <Text style={styles.textoBotao}>tirar uma foto</Text>
      </Pressable>

      <Pressable style={styles.botao2} onPress={() => navigation.navigate('Diagnostico')}>
          <Text style={styles.textoBotao2}>diagnóstico</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  Logo: {
    justifyContent: 'center',
    alignItems: 'center',  
    marginBottom: 100,
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  titulo: {
    color: '#000',
    justifyContent: 'center',
    marginTop: 10,
    fontSize: 20,
  },
  botao: {
    backgroundColor: '#7e325f',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 10,
  },
  textoBotao: {
    marginBottom: 0,
    color: '#fff',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
},
titulo2: {
  fontSize: 20,
  textAlign: 'center',
  fontWeight: "bold",
  marginBottom: 50,
  marginLeft: 45,
  marginRight: 45,
},
botao2: {
  backgroundColor: 'black',
  width: '50%',
  height: 45,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 7,
  marginBottom: 10,
  marginTop: 30,
},
textoBotao2: {
  marginBottom: 0,
  color: '#fff',
  fontSize: 15,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 7
},
});
