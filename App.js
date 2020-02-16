import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
//import {StyleSheet} from 'react-native';

import 'react-native-gesture-handler';
import Papers from './components/papers';
import PapersItem from './components/papersItem';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Papers" component={Papers} />
      <Stack.Screen name="PapersItem" component={PapersItem} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({});

// export default App;

//const styles = StyleSheet.create({});

//export default App;
