import React, { useState } from "react";
import { View,Text,StyleSheet, Image } from 'react-native'
import data from "./quizData/flag-data"
import FlagsScreen from "./src/screens/flags"
import HomeScreen from "./src/screens/home"
import MonumentScreen from "./src/screens/monuments";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App=()=>{

  return(
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false, cardStyle: { backgroundColor: '#142850' }}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Flags" component={FlagsScreen} />
          <Stack.Screen name="Monuments" component={MonumentScreen} />
        </Stack.Navigator>
      </NavigationContainer> 
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  questionTitle:{
    marginVertical:10
  },
  image:{
    width:40,
    height:40
  }
})
  

export default App;