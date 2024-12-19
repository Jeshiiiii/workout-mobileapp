import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Login = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const validUsernames = ['Gab', 'Alex', 'Sam'];  

    const handleLogin = () => {
      if (validUsernames.includes(username)) {
        navigation.navigate('Fitpad');
      } else {
        // Optionally handle the case where the username is not 'Gab'
        alert('Invalid username');
      }
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>Welcome to</Text>
                <Text style={styles.title}>GYMSYNC</Text>
            </View>
            <Text style={styles.subtitle}>Plan your workout with us</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="white"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              color="white"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="white"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              color="white"
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgb(000, 000, 000)',
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
        marginRight: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: 'white',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        marginVertical: 10,
        borderWidth: 1,
        padding: 10,
        borderColor: 'white',
        backgroundColor: 'transparent',
        placeholderTextColor: 'white',
        color: 'white',
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    forgotPassword: {
        marginTop: 10,
    },
    forgotPasswordText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default Login;