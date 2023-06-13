import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';


export function TerapiaLista({navigation}){


    const terapeutas =[
    {
        id: '01',
        desc: ['Fábio Andrade', 'depressão e suicídio']
    },

    {
        id: '02',
        desc: ['Maria Auxiliadora', 'questões raciais, autoestima.']
    },

    {
        id: '03',
        desc: ['Júlia Benzaquen', 'bipolaridade, tdah e transtornos em geral.']
    },

    {
        id: '04',
        desc: ['Maurício Sardá', 'identidade de gênero, lgbtqia+, sexualidade, relacionamentos, preconceito.']
    },

    {
        id: '05',
        desc: ['Roseane Borges', 'ansiedade, autocuidado, família, medos, autoconhecimento']
    },
]

    return(
        <View>
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
          </Pressable>
                </View>
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