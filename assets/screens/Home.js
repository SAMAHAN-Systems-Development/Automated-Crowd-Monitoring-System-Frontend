import React from 'react'
import { StyleSheet, View, Text, Pressable, Alert, Image} from 'react-native'

const Home = ({navigation}) => {

    return (
        <View style={styles.container}>
             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Pressable style={styles.button1} onPress={() => navigation.navigate('MachineLearning')}>
                <Text style={styles.Text}>MACHINE LEARNING</Text>
            </Pressable>
            <Pressable style={styles.button2} onPress={() => navigation.navigate('AI')}>
                <Text style={styles.Text}>ARTIFICIAL INTELLIGENCE</Text>
            </Pressable>
            <Pressable style={styles.button2} onPress={() => navigation.navigate('GameDesign')}>
                <Text style={styles.Text}>GAME DESIGN: 3D MODELING</Text>
            </Pressable>
            <Pressable style={styles.button2} onPress={() => navigation.navigate('UIUX')}>
                <Text style={styles.Text}>UI/UX DEVELOPMENT</Text>
            </Pressable>
            <Pressable style={styles.button2} onPress={() => navigation.navigate('DataMining')}>
                <Text style={styles.Text}>DATA MINING & STATISTICAL ANALYSIS</Text>
            </Pressable>
            <Pressable style={styles.button2} onPress={() => navigation.navigate('Technopreneurship')}>
                <Text style={styles.Text}>TECHNOPRENEURSHIP</Text>
            </Pressable>
           
        </View>
        </View>
        
        

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#13142A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button1: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 1,
        backgroundColor: '#FAC302',
        width: 260
        

    },
    button2: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 1,
        backgroundColor: '#FAC302',
        width: 260

    }
})

export default Home