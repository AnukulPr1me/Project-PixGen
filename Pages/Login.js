import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';

const logoImage = require('../img/pixgen_logo.png');

const Login = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
      <View style={{ marginTop: 50 }}>
        <Image
          style={{ width: 150, height: 100, resizeMode: 'contain' }}
          source={logoImage} 
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
