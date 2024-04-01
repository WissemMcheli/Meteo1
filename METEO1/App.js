import { View, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import Home from './src/screens/Home';

export default function App()  {
  return (
    <View style={style.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
    justifyContent: 'center',
  },
});