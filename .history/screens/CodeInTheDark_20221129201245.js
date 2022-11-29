
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Pressable, Alert} from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';


const Home = ({navigation}) => {

  console.log("App is working!");
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Please scan something...')
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>CODE IN THE DARK</Text>
           
        </View>
    )
}

export default Home