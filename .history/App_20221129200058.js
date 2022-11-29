import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Alert, Button, Pressable, onPress } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home'
import CID from './screens/CodeInTheDark'
import VChampionship from './screens/ValorantChampionship'


const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        
        <Stack.Screen name="CodeInTheDark" component={CID} />
        <Stack.Screen name="ValorantChampionship" component={VChampionship} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack 
  const Stack = createNativeStackNavigator();
  const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Please scan something...')
  
    const askForCameraPermission = () => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted')
      })()
    }
  
    useEffect(() => {
      askForCameraPermission();
    }, []);
  
    const handleBarCodeScanned = ({type, data}) => {
      setScanned(true);
      setText(data);
      console.log('type=' + type + 'data=' + data )
    
    }
  
    //check permission
  if(hasPermission === null) {
    return(
      <View style={styles.container}>
      <Text>Request to Open Camera</Text>
      </View>
    )
  }
  if(hasPermission === false) {
  
  return(
    <View style={styles.container}>
    <Text style= {{ margin: 10 }}>No Access to Camera</Text>
    <Button  
        title={"Allow Camera"}
        color="#5837D0"
        onPress={() => askForCameraPermission()} />
    </View>
  )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13142A',
    text: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    
    width:100,
    height: 100,
   display: 'fixed',
    justifyContent: "center"
  },
  
  barcodebox: {
    backgroundColor: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30, 
    backgroundColor: 'tomato'
  },
  buttonn: {
    padding: 5
  },
  maintext: {
    fontSize: 21,
    padding: 30,
    backgroundColor: '#EFF5F5',
    borderRadius: 5
  }
});
