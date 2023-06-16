import React from 'react';
import { 
    View, 
    Text, 
    FlatList, 
    StyleSheet, 
    Pressable, 
    SafeAreaView,
    ScrollView,
    StatusBar } from 'react-native';


export function TerapiaLista({navigation}){

    const terapeutas1 = [
    {
        id: '01',
        desc: ['Fábio Andrade', 'depressão e suicídio']
    },
]

const terapeutas2 = [
    {
        id: '01',
        desc: ['Maria Auxiliadora', 'questões raciais, autoestima.']
    },
]

const terapeutas3 =[
    {
        id: '01',
        desc: ['Júlia Benzaquen', 'bipolaridade, tdah e transtornos em geral.']
    },
]

const terapeutas4 =[
    {
        id: '01',
        desc: ['Maurício Sardá', 'identidade de gênero, lgbtqia+, sexualidade, relacionamentos, preconceito.']
    },

]



    return(
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View>
            <FlatList data={terapeutas1} keyExtractor={item=>item.id}
                renderItem={({item})=>
                <View style={styles.item}><Text style={styles.descricao}>Nome: {item.desc[0]}  Especialidades: {item.desc[1]}</Text>
                <Pressable style={styles.botaoSaibaMais} onPress={() => navigation.navigate('SobreFabio')}>
                <Text style={styles.textoBotaoSaibaMais}>saiba mais</Text>
            </Pressable></View>
                
            }/>

            <FlatList data={terapeutas2} keyExtractor={item=>item.id}
                renderItem={({item})=>
                <View style={styles.item}><Text style={styles.descricao}>Nome: {item.desc[0]}  Especialidades: {item.desc[1]}</Text>
                <Pressable style={styles.botaoSaibaMais} onPress={() => navigation.navigate('SobreMaria')}>
                <Text style={styles.textoBotaoSaibaMais}>saiba mais</Text>
            </Pressable></View>
                
            }/>

            <FlatList data={terapeutas3} keyExtractor={item=>item.id}
                renderItem={({item})=>
                <View style={styles.item}><Text style={styles.descricao}>Nome: {item.desc[0]}  Especialidades: {item.desc[1]}</Text>
                <Pressable style={styles.botaoSaibaMais} onPress={() => navigation.navigate('SobreJulia')}>
                <Text style={styles.textoBotaoSaibaMais}>saiba mais</Text>
            </Pressable></View>
                
            }/>

            <FlatList data={terapeutas4} keyExtractor={item=>item.id}
                renderItem={({item})=>
                <View style={styles.item}><Text style={styles.descricao}>Nome: {item.desc[0]}  Especialidades: {item.desc[1]}</Text>
                <Pressable style={styles.botaoSaibaMais} onPress={() => navigation.navigate('SobreMauricio')}>
                <Text style={styles.textoBotaoSaibaMais}>saiba mais</Text>
            </Pressable></View>
                
            }/>
            
        </View>

        </ScrollView>
    </SafeAreaView>
    );
};
const styles=StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
      scrollView: {
        backgroundColor: '#DDA0DD',
        marginHorizontal: 20,
      },

    item: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        marginBottom: 20
    },

    descricao: {
        fontSize: 15,
        color: '#000',
        
    },

    botaoSaibaMais: {
        backgroundColor: '#533D8B',
        width: '40%',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 10,
      },

      textoBotaoSaibaMais:{
        marginBottom: 0,
        color: '#fff',
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
    },
});