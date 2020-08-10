import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomePage = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.sectionTitle}>Welcome to the planner App</Text>
            <Button
                onPress={() => navigation.navigate('Planner')}
                title="Start Planning"
                raised
            />
        </View>
    )
};

export default HomePage;

const styles = StyleSheet.create({
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: 'black',
      textAlign: 'center',
      margin: 20
    },
})
