import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';


export function TerapiaLista({navigation}){

    const terapeutas1 =[
    {
        id: '01',
        desc: ['Fábio Andrade', 'depressão e suicídio']
    }
]

    const terapeutas2 =[
    {
        id: '01',
        desc: ['Maria Auxiliadora', 'questões raciais, autoestima.']
    }
]

    return(
        <View>
            <FlatList data={terapeutas1} keyExtractor={item=>item.id}
                renderItem={({item})=>
                <View style={styles.item}><Text style={styles.descricao}>Nome: {item.desc[0]}  Especialidades: {item.desc[1]}</Text>
                <Pressable onPress={() => navigation.navigate('SobreFabio')}>
                <Text>saiba mais</Text>
          </Pressable></View>

            }
            
            />
            <FlatList data={terapeutas2} keyExtractor={item=>item.id}
            <View style={styles.bemVindo}>
                <Text>
                Bem-vindo, ! 
                </Text>
            </View>
            <FlatList data={terapeutas} keyExtractor={item=>item.id}
                renderItem={({item})=>
                <View style={styles.item}><Text style={styles.descricao}>Nome: {item.desc[0]}  Especialidades: {item.desc[1]}</Text>
                <Pressable onPress={() => navigation.navigate('Cadastro')}>
                <Text>cadastrar</Text>
          </Pressable></View>

            }
            
            />
        </View>

        
        
    )
}
const styles=StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16
    },
    descricao: {
        fontSize: 18,
        color: '#000'
    }
});