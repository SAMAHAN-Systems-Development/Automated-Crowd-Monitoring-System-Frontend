import React from 'react'
import { StyleSheet, View, Text, Pressable, Alert} from 'react-native'

const Home = ({navigation}) => {

    return (
        <View style={styles.container}>
             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Pressable style={styles.button1} onPress={() => navigation.navigate('CodeInTheDark')}>
                <Text style={styles.Text}>CODE IN THE DARK</Text>
            </Pressable>
            <Pressable style={styles.button2} onPress={() => navigation.navigate('ValorantChampionship')}>
                <Text style={styles.Text}>VALORANT CHAMPIONSHIP</Text>
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
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 1,
        backgroundColor: '#FAC302',
        

    },
    button2: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 1,
        backgroundColor: '#FAC302',

    }
})

export default Home