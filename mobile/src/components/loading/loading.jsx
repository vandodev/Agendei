import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';

function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007BFF" />
      <Text style={styles.text}>Carregando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
});

export default Loading;