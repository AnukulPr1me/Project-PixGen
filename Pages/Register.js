import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const logoImage = require('../img/pixgen_logo.png');
const logoImg = require('../img/PixGen.png');

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleRegister = () => {
    // Implement registration logic
    console.log('Registering...');

    // Example of registering using fetch API
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Registration response:', data);
        Alert.alert('Registration successful', 'You have been registered successfully');
        // Reset input fields
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

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
            <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={[styles.checkbox, rememberMe && styles.checked]}>
              {rememberMe && <Icon name="done" size={14} color="white" />}
            </TouchableOpacity>
            <Text>Keep me logged in</Text>
            <Text style={{ fontWeight: '500', color: '#007FFF', textAlign: 'right' }}>  Forgot Password</Text>
          </View>
        </View>

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
