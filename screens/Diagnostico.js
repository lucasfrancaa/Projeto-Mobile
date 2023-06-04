import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Diagnostico() {
  const result = 'Seu diagnóstico é:';

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{result}</Text>
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