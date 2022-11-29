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
            <View style={styles.container}>
                <View style={styles.smiley}>
            <Text>CODE IN THE DARK</Text>
            <Image
          style={{width: 100, height:100}} 
          source={require('Smiley.png')}
          />
      </View>



            </View>
            <View></View>
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
      marginTop: 500,
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
      color: 'white'
      
    },
    image: {
      marginTop: 100
    },
    smiley: {
      marginBottom: -450,
      marginTop: 100
    },
    Requestcontainer: {
      backgroundColor: '#13142A'
    },
    title: {
      color: 'red'
    }
    
    
  });