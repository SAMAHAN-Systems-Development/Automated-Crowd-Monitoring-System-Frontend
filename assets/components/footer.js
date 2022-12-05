import React, { Component } from 'react'
import { View, Image, StyleSheet} from 'react-native'

const Footer = () => (
   <View style={styles.container}>
      <Image 
      style={{width: 300, height: 150}}
      source={require('../images/Footer.png')}
      />
   </View>
)

const styles = StyleSheet.create({
   container: {
       flex: 1,
       marginBottom: -30,
       alignItems: 'center',
       justifyContent: 'flex-end'
     
   }
})

export default Footer