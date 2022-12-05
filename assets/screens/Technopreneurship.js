import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StyleSheet, View, Button, Text, Pressable, Alert } from "react-native";
import { Image } from "react-native";
import axios from "axios";
import Footer from '../components/footer'


// CONFIGS
import config from '../configurations/_config_SheetsTesting';

const Home = ({ navigation }) => {
  console.log("App is working!");
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Please scan something...");

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };
  //req camera permission
  

  async function getUserData(id) {
    try {
      const userData = await axios.get(`https://sysdev-acms-api.onrender.com/api/users/${id}`, {params: config});
      return userData;
    }
    catch (error) {
      console.log('[ERROR on getUserData]');
      return error.toJSON();
    }
  }

  async function setHasEntered(id, bool=true) { // DEFAULTS TO TRUE
    try {
      const userEntered = await axios.put(`https://sysdev-acms-api.onrender.com/api/users/${id}`, {
        entered: bool
      },
      {params: config})
      return userEntered;
    }
    catch (error) {
      console.log('[ERROR on setHasEntered]');
      return error.toJSON();
    }
  }

  async function addEntryLog(id, data) {
    try {
      const entryLog = await axios.post(`https://sysdev-acms-api.onrender.com/api/log`, {
        id: id,
        surname: data.LASTNAME
      },
      {params: config})

      return entryLog;
    }
    catch (error) {
      console.log('[ERROR on addEntryLog]');
      return error.toJSON();
    }
  }

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log("type=" + type + "data=" + data);

    // GET USER DATA
    var user = await getUserData(data);
    if (user.status === 200) {
      console.log(`[USER DATA]`);
      console.log(user.data)
    }
    else if (user.status === 404) {
      console.log(`[USER NOT FOUND]`);
    }

    var userEntered = await setHasEntered(data);
    if (userEntered.status === 200) {
      console.log(`[USER ENTERED STATUS] ${userEntered.data.msg}`);

      // IF ENTERED, ADD TO LOG
      var log = await addEntryLog(data, user.data);
      if (log.status == 201) {
        console.log(`ADDED LOG FOR ${data}`);
      }
      else {
        console.log("[USER NOT LOGGED]");
      }
    }
    else if (userEntered.status === 404) {
      console.log(`[USER NOT FOUND]`);
    }
  };

  //check permission
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Request to Open Camera</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No Access to Camera</Text>
        <Button
          title={"Allow Camera"}
          color="#5837D0"
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }
  //return the output in page
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.barcodebox}>
      
      <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 550, width: 500 }}
        />
      </View>
      <Text style={styles.maintext}>{text}</Text>
      {scanned && (
        <Button
          title={"SCAN AGAIN"}
          onPress={() => setScanned(false)}
          color="#FAC302"
        />
      )}
      
      <Footer/>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13142A',
    alignItems: "center",
    justifyContent: "center",
  },

  barcodebox: {
    marginTop: 150,
    backgroundColor: "fff",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
  },
  maintext: {
    fontSize: 20,
    color: "white",
    margin: 10,
    marginBottom: 20,
  },
  
});
