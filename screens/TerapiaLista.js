import React, { useState, useContext, useEffect } from 'react';
import { View, Text, ScrollView, Pressable, SafeAreaView, StatusBar, FlatList } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { UserContext } from '../contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function TerapiaLista({ navigation }) {

  const { userName } = useContext(UserContext);

  useEffect(() => {
    const loadUserName = async () => {
      try {
        const storedUserName = await AsyncStorage.getItem('userName');
        if (storedUserName) {
          setUserName(storedUserName);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadUserName();
  }, []);

  const [terapeutas1, setTerapeutas1] = useState([
    {
      id: '01',
      desc: ['Fábio Andrade', 'depressão e suicídio'],
      route: 'SobreFabio',
      archived: false
    },
  ]);

  const [terapeutas2, setTerapeutas2] = useState([
    {
      id: '02',
      desc: ['Maria Auxiliadora', 'questões raciais, autoestima.'],
      route: 'SobreMaria',
      archived: false
    },
  ]);

  const [terapeutas3, setTerapeutas3] = useState([
    {
      id: '03',
      desc: ['Júlia Benzaquen', 'bipolaridade, tdah e transtornos em geral.'],
      route: 'SobreJulia',
      archived: false
    },
  ]);

  const [terapeutas4, setTerapeutas4] = useState([
    {
      id: '04',
      desc: ['Maurício Sardá', 'identidade de gênero, lgbtqia+, sexualidade, relacionamentos, preconceito.'],
      route: 'SobreMauricio',
      archived: false
    },
  ]);

  const handleArchive = (id, list) => {
    const updatedList = list.map(item => {
      if (item.id === id) {
        return { ...item, archived: true };
      }
      return item;
    });
    switch (list) {
      case terapeutas1:
        setTerapeutas1(updatedList);
        break;
      case terapeutas2:
        setTerapeutas2(updatedList);
        break;
      case terapeutas3:
        setTerapeutas3(updatedList);
        break;
      case terapeutas4:
        setTerapeutas4(updatedList);
        break;
      default:
        break;
    }
  };

  const renderItem = ({ item, list }) => {
    if (item.archived) {
      return null; // Don't render archived items
    }
    return (
      <Card style={styles.item}>
        <Card.Content>
          <Text style={styles.descricao}>Nome: {item.desc[0]}</Text>
          <Text style={styles.descricao}>Especialidades: {item.desc[1]}</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            style={styles.botaoSaibaMais}
            onPress={() => navigation.navigate(item.route)}
          >
            <Text style={styles.textoBotaoSaibaMais}>Saiba mais</Text>
          </Button>
          <Button
            style={styles.botaoArquivar}
            onPress={() => handleArchive(item.id, list)}
          >
            <Text style={styles.textoBotaoArquivar}>Arquivar</Text>
          </Button>
        </Card.Actions>
      </Card>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>

        <Text style={styles.welcomeText}>Bem-vindo, {userName}!</Text>
        <Text style={styles.Text}>Lista de terapeutas gratuitos:</Text>

          <FlatList
            data={terapeutas1}
            keyExtractor={item => item.id}
            renderItem={({ item }) => renderItem({ item, list: terapeutas1 })}
          />

          <FlatList
            data={terapeutas2}
            keyExtractor={item => item.id}
            renderItem={({ item }) => renderItem({ item, list: terapeutas2 })}
          />

          <FlatList
            data={terapeutas3}
            keyExtractor={item => item.id}
            renderItem={({ item }) => renderItem({ item, list: terapeutas3 })}
          />

          <FlatList
            data={terapeutas4}
            keyExtractor={item => item.id}
            renderItem={({ item }) => renderItem({ item, list: terapeutas4 })}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 25,
  },
  Text: {
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 15,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#DDA0DD',
  },
  item: {
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 16,
    marginBottom: 20,
    minHeight: 130, 
  },
  descricao: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',

  },
  botaoSaibaMais: {
    backgroundColor: '#533D8B',
    minheight: 37,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10,
  },
  textoBotaoSaibaMais: {
    color: '#fff',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  botaoArquivar: {
    backgroundColor: '#A9A9A9',
    minheight: 37,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10,
  },
  textoBotaoArquivar: {
    color: '#fff',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
};