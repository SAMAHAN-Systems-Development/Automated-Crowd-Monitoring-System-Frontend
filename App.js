
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Alert, Button, Pressable, onPress, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './assets/screens/Home'
import MachineLearning from './assets/screens/MachineLearning'
import AI from './assets/screens/AI'
import GameDesign from './assets/screens/GameDesign'
import UIUX from './assets/screens/UIUX'
import DataMining from './assets/screens/DataMining'
import Technopreneurship from './assets/screens/Technopreneurship'


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home', headerShown: false,
        }}
        />

        <Stack.Screen name="MachineLearning" 
        component={MachineLearning} 
        options={{ title: 'Machine Learning',
        headerStyle: {
        backgroundColor: '#13142A'
        },
        cardStyle: { backgroundColor: '#13142A' },
        headerTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center'
        }}
        />


        <Stack.Screen name="AI"
        component={AI} 
        options={{ title: 'Artificial Intelligence',
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


        <Stack.Screen name="GameDesign"
        component={GameDesign} 
        options={{ title: 'Game Design',
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

        <Stack.Screen name="UIUX"
        component={UIUX} 
        options={{ title: 'UI/UX Development',
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

        <Stack.Screen name="DataMining"
        component={DataMining} 
        options={{ title: 'Data Mining & Statistical Analysis',
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

        <Stack.Screen name="Technopreneurship"
        component={Technopreneurship} 
        options={{ title: 'Technopreneurship',
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




  
 
  
  



