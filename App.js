import React, {Component} from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import Papers from './components/papers';
import Articles from './components/articles';
import Post from './components/post';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

export class MyStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="News Papers"
          component={Papers}
          color="#5b5b5b"
          options={{
            headerStyle: {
              backgroundColor: '#5b5b5b',
            },
            headerTransparent: true,
            headerTintColor: '#a5c7f3',

            headerBackground: () => <View tint="#5b5b5b" intensity={100} />,
          }}
        />
        <Stack.Screen
          name="Articles"
          component={Articles}
          color="#5b5b5b"
          backgroundColor="#5b5b5b"
          options={{
            headerTransparent: true,
            headerTintColor: '#a5c7f3',
            headerBackground: () => <View tint="#5b5b5b" intensity={100} />,
          }}
        />
        <Stack.Screen
          name="Post"
          component={Post}
          color="#5b5b5b"
          backgroundColor="#5b5b5b"
          options={{
            headerTransparent: true,
            headerTintColor: '#a5c7f3',
            headerBackground: () => <View tint="#5b5b5b" intensity={100} />,
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}
