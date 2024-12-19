import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function Signup ({navigation}){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log('Signing up with:', username, password, email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to GYMSYNC</Text>
        <Text style={styles.subtitle}>Plan your workout time with us</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
          color="white"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
          color="white"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
          color="white"
          placeholderTextColor="white"
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.buttonText, { fontWeight: 'bold' }]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(000, 000, 000)', // Change to your desired RGB background color
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: 'red', // Change text color to red
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'transparent',
    color: 'white', // Change text color to white
  },
  button: {
    backgroundColor: 'red', // Change to your desired button color
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Signup;