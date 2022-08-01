import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'


import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import NewTicket from "./src/screens/newTicket";
import Details from './src/screens/Details';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="newTicket" component={NewTicket} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

