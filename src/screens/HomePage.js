import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import {Button} from 'react-native-elements';

const screenWidth = Dimensions.width;

const HomePage = ({navigation}) => {
    return (
        <View>
            <Text style={styles.welcomeText}>Welcome to the planner App</Text>
            <Image
                style={styles.welcomeImage}
                source={require('../assets/images/welcome.png')}
            />
            <Button
                onPress={() => navigation.navigate('Planner')}
                title="Start Planning"
                raised
            />
        </View>
    )
};

const styles = StyleSheet.create({
    welcomeText: {
        fontSize: 20,
        color: '#27c5a3',
        fontWeight: '900',
        textAlign: 'center',
        marginTop: 100,
        marginBottom: 50,
    },
    welcomeImage: {
        width: screenWidth,
        height: 500,
        marginBottom: 50,
    }
})

export default HomePage;