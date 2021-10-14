import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottonTab from './components/BottonTab';

export default function App() {
  return (
    <NavigationContainer>
      <BottonTab/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
