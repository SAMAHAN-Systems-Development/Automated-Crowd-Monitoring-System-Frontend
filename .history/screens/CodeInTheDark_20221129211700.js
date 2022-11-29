import React, {useState, useEffect} from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StyleSheet, View, Button, Text, Pressable, Alert} from 'react-native'
import {Image} from 'react-native'; 

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
  //return the output in page
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           
            <View style={styles.barcodebox}>
      
      <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 550, width: 500}} />
      </View>     
      <Text style={styles.maintext}>{text}</Text>
      {scanned && <Button title={'SCAN AGAIN'} onPress={() => setScanned(false)} color='#FAC302' />}
           
      
            </View>
        
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#13142A',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    barcodebox: {
      marginTop: 10,
      backgroundColor: 'fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: 300,
      width: 300,
      overflow: 'hidden',
      borderRadius: 30, 
      backgroundColor: 'tomato'
    },
    maintext: {
      fontSize: 20,
      color: 'black'
      
    },
    
    
    
  });