import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

export function Upload({ navigation }) {
  const [image, setImage] = useState(null);

  const handleImageUpload = async () => {
    if (image) {
      const formData = new FormData();
      const imageFile = {
        uri: image.uri,
        type: 'image/jpeg',
        name: 'image.jpg',
      };
      formData.append('file', imageFile);
  
      try {
        console.log('aaaa')
        const response = await fetch('http://192.168.1.17:5000/uploads', {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response)
  
        const prediction = await response.json();
  
        navigation.navigate('Resultado', { prediction });
      } catch (error) {
        console.error('Erro ao enviar a imagem:', error);
      }
    }
  };
  
  const handleImageSelection = async () => {
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
  
      if (!pickerResult.canceled) {
        const fileUri = pickerResult.uri;
        const fileInfo = await FileSystem.getInfoAsync(fileUri);
        const file = {
          uri: fileUri,
          type: 'image/jpeg',
          name: fileInfo.name || 'image.jpg',
        };
        setImage(file);
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
  
      if (!pickerResult.canceled) {
        const fileUri = pickerResult.uri;
        const fileInfo = await FileSystem.getInfoAsync(fileUri);
        const file = {
          uri: fileUri,
          type: 'image/jpeg',
          name: fileInfo.name || 'image.jpg',
        };
        setImage(file);
      }
    } catch (error) {
      console.log('Erro ao tirar foto:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Logo}>
        <Image
          source={{
            uri: 'https://i.postimg.cc/15XKzt2p/1614446004441.jpg',
          }}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.titulo} variant="headlineLarge">
          TherapyCare
        </Text>
      </View>

      {image && <Image source={{ uri: image.uri }} style={styles.image} />}

      <Text style={styles.titulo2}>Como você está se sentindo hoje?</Text>

      <Pressable style={styles.botao} onPress={handleImageSelection}>
        <Text style={styles.textoBotao}>Selecionar da Galeria</Text>
      </Pressable>

      <Pressable style={styles.botao} onPress={takePhoto}>
        <Text style={styles.textoBotao}>Tirar uma Foto</Text>
      </Pressable>

      <Pressable style={styles.botao2} onPress={handleImageUpload}>
        <Text style={styles.textoBotao2}>Enviar</Text>
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
    backgroundColor: '#533D8B',
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
    borderRadius: 7,
  },
  titulo2: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
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
    borderRadius: 7,
  },
});