import React, {useState, useEffect} from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StyleSheet, View, Text, Pressable, Alert} from 'react-native'

const Home = ({navigation}) => {
    console.log("App is working!");
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Please scan something...')

    const askForCameraPermission = () => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted')
        })()
      }
      //req camera permission

useEffect(() => {
    askForCameraPermission();
  }, []);
  
  const handleBarCodeScanned = ({type, data}) => {
    setScanned(true);
    setText(data);
    console.log('type=' + type + 'data=' + data )
  
  }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>CODE IN THE DARK</Text>
           
        </View>
    )
}

export default Home