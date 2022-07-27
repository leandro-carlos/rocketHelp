import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home'
import SignIn from './src/screens/SignIn'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SignIn />
    </NavigationContainer>
  )
}