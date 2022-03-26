import React, { useState } from 'react';
import axios from 'axios';
import {Button,TextInput,StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Register = ({ navigation }) => {
    //Values stored using state
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [testData, setTestData] = useState('');

    //View that is rendered
    return (
        <View style={styles.container}>
        <TextInput
        style={{height: 40}}
        placeholder="Enter your Name"
        onChangeText={newName => setName(newName)}
        />
        <TextInput
        style={{height: 40}}
        placeholder="Enter your Email"
        onChangeText={newUser => setUser(newUser)}
        />
        <TextInput
        style={{height: 40}}
        placeholder="Enter your Password"
        onChangeText={newPass => setPass(newPass)}
        />
        <Text>
        Your email is {user} and password is {pass}
        </Text>
        <Button
        onPress={() => {
            //DO REST SHIT HERE
            axios.post(`http://localhost:5000/api/users`,{ user, pass})
            .then(res => {
                console.log(res);
                console.log(res.data)
            })
            //Returns user to home screen
            navigation.pop();
         }}
        title = "Register"
        />
    </View>
    );
};
export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
