import React, { useState } from 'react';
import {Button,TextInput,StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({ navigation }) => {
    //View that is rendered
    return (
      <View style={styles.container}>
        <Text>
          Home Screen!
        </Text>
      </View>
    );
};
export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
