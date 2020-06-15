import React, {Component} from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import Papers from './components/papers';
import Articles from './components/articles';
import Post from './components/post';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export class MyStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Papers"
          component={Papers}
          options={{
            headerStyle: {
              // backgroundColor: '#6f7d98',
            },
            headerTransparent: true,
            headerTintColor: '#a5c7f3',

            headerBackground: () => <View tint="#5b5b5b" intensity={100} />,
          }}
        />
        <Stack.Screen
          name="Articles"
          component={Articles}
          color="#F9FBE7"
          backgroundColor="#6f7d98"
          options={{
            headerTransparent: true,
            headerTintColor: '#a5c7f3',
            headerBackground: () => <View tint="#F9FBE7" intensity={100} />,
          }}
        />
        <Stack.Screen
          name="Post"
          component={Post}
          color="#F9FBE7"
          backgroundColor="#6f7d98"
          options={{
            headerTransparent: true,
            headerTintColor: '#a5c7f3',
            headerBackground: () => <View tint="#F9FBE7" intensity={100} />,
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
