import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios'; // Import axios for HTTP requests

const logoImg = require('../img/PixGen.png');

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Function to handle registration
  const handleRegister = () => {
    // User object with registration data
    const user = {
      name: name,
      email: email,
      password: password,
    };

    // HTTP POST request to register user
    axios
      .post("http://192.168.1.14:3000/register", user)
      .then((response) => {
      console.log('Registration response:', response);
      Alert.alert('Registration successful', 'You have been registered successfully');
      setName('');
      setEmail('');
      setPassword('');
    })
    .catch(error => {
      console.error('Error during registration:', error);
      Alert.alert('Registration failed', 'An error occurred during registration');
    });
};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
      <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} behavior="padding">
        <View style={{ marginTop: 50 }}>
          <Image
            style={{ width: 150, height: 100, resizeMode: 'contain' }}
            source={logoImg}
          />
        </View>

        <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 20, marginBottom: 20 }}>Register an Account</Text>

        <View style={{ marginVertical: 20, width: '80%' }}>
          {/* Input field for name */}
          <View style={styles.inputContainer}>
            <Icon
              name="person"
              size={24}
              color="gray"
              style={{ marginRight: 10 }}
            />
            <TextInput
              value={name}
              onChangeText={text => setName(text)}
              placeholder="Enter your Name"
              placeholderTextColor="gray"
              style={{ flex: 1, color: 'gray', fontSize: 16 }}
            />
          </View>

          {/* Input field for email */}
          <View style={styles.inputContainer}>
            <Icon
              name="email"
              size={24}
              color="gray"
              style={{ marginRight: 10 }}
            />
            <TextInput
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="Enter your Email"
              placeholderTextColor="gray"
              style={{ flex: 1, color: 'gray', fontSize: 16 }}
            />
          </View>

          {/* Input field for password */}
          <View style={styles.inputContainer}>
            <Icon
              name="lock"
              size={24}
              color="gray"
              style={{ marginRight: 10 }}
            />
            <TextInput
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Enter your Password"
              placeholderTextColor="gray"
              secureTextEntry={true}
              style={{ flex: 1, color: 'gray', fontSize: 16 }}
            />
          </View>

          {/* Checkbox for 'remember me' */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
            <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={[styles.checkbox, rememberMe && styles.checked]}>
              {rememberMe && <Icon name="done" size={14} color="white" />}
            </TouchableOpacity>
            <Text>Keep me logged in</Text>
            <Text style={{ fontWeight: '500', color: '#007FFF', textAlign: 'right' }}>  Forgot Password</Text>
          </View>
        </View>

        {/* Register button */}
        <Pressable
          onPress={handleRegister}
          style={{
            width: 200,
            backgroundColor: 'black',
            padding: 15,
            marginTop: 40,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 16,
              color: 'white',
            }}
          >
            Register
          </Text>
        </Pressable>

        {/* Link to login screen */}
        <Pressable
          onPress={() => navigation.navigate('Login')}
          style={{ marginTop: 10 }}
        >
          <Text style={{ textAlign: 'center', fontSize: 16 }}>Already have an account? Login</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 5,
    marginTop: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: 'gray',
  },
});

export default Register;
