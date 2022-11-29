import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Alert, Button, Pressable, onPress } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home'
import CID from './screens/CodeInTheDark'
import VChampionship from './screens/ValorantChampionship'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        
        <Stack.Screen name="Code In The Dark" component={CID} />
        <Stack.Screen name="ValorantChampionship" component={VChampionship} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default MyStack


  
 
  
  



