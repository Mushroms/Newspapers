import React, {Component} from 'react';
import {ImageBackground, View} from 'react-native';
//import {StyleSheet} from 'react-native';

import 'react-native-gesture-handler';
import Papers from './components/papers';
import Articles from './components/articles';
import Post from './components/post';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Papers"
        component={Papers}
        options={{
          headerTransparent: true,
          headerBackground: () => <View tint="wight" intensity={100} />,
        }}
      />
      <Stack.Screen
        name="Articles"
        component={Articles}
        color="#F9FBE7"
        options={{
          headerTransparent: true,
          headerBackground: () => <View tint="#F9FBE7" intensity={100} />,
        }}
      />
      <Stack.Screen
        name="Post"
        component={Post}
        color="#F9FBE7"
        options={{
          headerTransparent: true,
          headerBackground: () => <View tint="#F9FBE7" intensity={100} />,
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
