import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import fire from './assets/fire.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={fire} style={{ width: 100, height: 100, marginBottom: 10 }} />
      <Text style={styles.title}>Is It Lit?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f80',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 48,
  },
});
