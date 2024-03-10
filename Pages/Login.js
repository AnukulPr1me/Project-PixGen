import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import Home from './Home';

const logoImage = require('../img/pixgen_logo.png');
const logoImg = require('../img/PixGen.png')

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const CheckLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
          setTimeout(() => {
            navigation.replace('Home');
          }, 400);
        }
      } catch (error) {
        console.log('error', error);
      }
    };
    CheckLoginStatus();
  });


  const handleLogin = () => {
    const user = {
      email: email,
      password: password
    };
  
    axios.post('http://192.168.1.14:3000/login', user)
      .then((response) => {
        console.log('Logging in...');
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);
        navigation.navigate("Home");
        // Handle successful login response here
      })
      .catch((error) => {
        Alert.alert("Login Error",error.message);
        console.error('Error during login:', error);
        // Handle login error here
      });
  };
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
      <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <View style={{ marginTop: 50, alignItems: 'center' }}>
          <Image
            style={{ width: 150, height: 100, resizeMode: 'contain' }}
            source={logoImg} 
          />
        </View>

        <View style={{ width: '80%', alignItems: 'center' }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 20, marginBottom: 20, textAlign: 'center' }}>Login to your Account</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'gray', paddingBottom: 5, width: '100%' }}>
            <Icon
              name="email"
              size={24}
              color="gray"
              style={{ marginRight: 10 }}
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Enter your Email"
              placeholderTextColor="gray"
              style={{ flex: 1, color: 'gray', fontSize: 16 }}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'gray', paddingBottom: 5, marginTop: 20, width: '100%' }}>
            <Icon
              name="lock"
              size={24}
              color="gray"
              style={{ marginRight: 10 }}
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Enter your Password"
              placeholderTextColor="gray"
              secureTextEntry={true}
              style={{ flex: 1, color: 'gray', fontSize: 16 }}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, width: '100%' }}>
            <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={[styles.checkbox, rememberMe && styles.checked]}>
              {rememberMe && <Icon name="done" size={14} color="white" />}
            </TouchableOpacity>
            <Text>Keep me logged in</Text>
            <Text style={{ fontWeight: '500', color: '#007FFF', textAlign: 'right' }}>  Forgot Password</Text>
          </View>
        </View>

        <Pressable
          onPress={handleLogin}
          style={{
            width: 200,
            backgroundColor: 'black',
            padding: 15,
            marginTop: 40,
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              color: "white",
            }}
          >
            Login
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 10 }}
        >
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Don't have an account?   Sign up
          </Text>
        </Pressable>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    marginRight: 10,
  },
  checked: {
    backgroundColor: 'gray',
  },
});

export default Login;
