import React, {Component} from 'react';
import {ImageBackground, View} from 'react-native';
//import {StyleSheet} from 'react-native';

import 'react-native-gesture-handler';
import Papers from './components/papers';
import PapersItem from './components/papersItem';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PaperBackImage from './src/black_paper_@2X.png';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Papers"
        component={Papers}
        options={{
          headerTransparent: true,
          headerBackground: () => (
            <View
              tint="wight"
              intensity={100}
              //style={StyleSheet.absoluteFill}
            />
          ),
        }}
      />
      <Stack.Screen
        name="PapersItem"
        component={PapersItem}
        color="white"
        options={{
          headerTransparent: true,
          headerBackground: () => (
            <View
              tint="white"
              intensity={100}
              //style={StyleSheet.absoluteFill}
            />
          ),
        }}
      />
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

// const styles = StyleSheet.create({
//   background: 'PaperBackImage',
// });

// export default App;

//const styles = StyleSheet.create({});

//export default App;
