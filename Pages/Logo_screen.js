import { StackActions } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
const logoImg = require('../img/PixGen.png');
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogoScreen = ({ navigation }) => {
    useEffect(() => {
        const checkOnboardingStatus = async () => {
            try {
                const onboardingShown = await AsyncStorage.getItem('onboardingShown');
                if (!onboardingShown) {
                    // Onboarding screen has not been shown before
                    // Redirect to the onboarding screen
                    setTimeout(() => {
                        // Redirect to the onboarding screen
                        navigation.dispatch(StackActions.replace('Onboarding'));
                    }, 3000);
                    // Set a flag to indicate that it has been shown
                    await AsyncStorage.setItem('onboardingShown', 'true');
                } else {
                    // Onboarding screen has been shown before
                    // Display the logo screen for at least 3000ms before redirecting to login
                    setTimeout(() => {
                        console.log('Onboarding screen has been shown before');
                        navigation.dispatch(StackActions.replace('Login'));
                    }, 3000);
                }
            } catch (error) {
                console.error('Error checking onboarding status:', error);
            }
        };

        checkOnboardingStatus();

    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={logoImg} style={styles.logo} />
            {/* Wrap the text string in a <Text> component */}
            <Animatable.Text style={{fontSize: 30, fontWeight: 400, color: 'black'}} duration={3000} animation="fadeIn">PIXGEN</Animatable.Text>
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
