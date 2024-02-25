import { StackActions } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
const logoImg = require('../img/PixGen.png');

const LogoScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.dispatch(StackActions.replace('Login'));
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigation]);
    return (
        <View style={styles.container}>
            <Image source={logoImg} style={styles.logo} />
            {/* Wrap the text string in a <Text> component */}
            <Text style={{fontSize: 25, fontWeight: 200}}>PIXGEN</Text>
        </View>
    )
}

export default LogoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', // Adjust as per your styling
    },
    logo: {
        width: 200, // Adjust width and height as per your logo's dimensions
        height: 200,
    },
});
