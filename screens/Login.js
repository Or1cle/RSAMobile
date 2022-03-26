import React, { useState } from 'react';
import {Button,TextInput,StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Login = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [testData, setTestData] = useState('');

  return (
  <View style={styles.container}>
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
    //Button does REST Shit to login
      onPress={() => {
        //REST STUFF GOES HERE
        
        //Takes user to home page
        //This is a placeholder
        navigation.navigate('Home')
      }}
      title = "Login"
    />
    <Button
    //Button takes user to register page
      onPress={() =>
        navigation.navigate('Register')
      }
      title = "Register"
    />
  </View>
  );
};
export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
