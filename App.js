import React, { useState } from 'react';
import {Button,TextInput,StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';

const Root = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="Login" component={Login} />
        <Root.Screen name="Register" component={Register} />
        <Root.Screen name="Home" component={Home} />
      </Root.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
