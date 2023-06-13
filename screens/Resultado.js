import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Resultado({navigation}) {

  const { prediction } = route.params; 

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Resultado:</Text>
      <Text>{prediction}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 90,
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});