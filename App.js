import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Alert, Button, Pressable, onPress } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home'
import CID from './screens/CodeInTheDark'
import VChampionship from './screens/ValorantChampionship'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home',
        headerStyle: {
        backgroundColor: '#13142A'
            
          },
        headerTitleStyle: {
        color: 'white'
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center'
        }}
          
        />
        <Stack.Screen name="CodeInTheDark" 
        component={CID} 
        options={{ title: 'Code In The Dark',
        headerStyle: {
        backgroundColor: '#13142A'
          
        },
        headerTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center'
        }}
        />
        <Stack.Screen name="ValorantChampionship"
        component={VChampionship} 
        options={{ title: 'Valorant Championship',
        headerStyle: {
        backgroundColor: '#13142A'
          
        },
        headerTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default MyStack


  
 
  
  



