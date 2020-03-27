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
              backgroundColor: '#6f7d98',
            },
            headerTransparent: true,
            headerTintColor: '#a5c7f3',
            headerBackground: () => <View tint="#F9FBE7" intensity={100} />,
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
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     rss: {},
  //   };
  // }

  // getData() {
  //   return fetch('https://www.vesti.ru/vesti.rss')
  //     .then(response => response.text())
  //     .then(responseDataXml => {
  //       // eslint-disable-next-line handle-callback-err
  //       parseString(responseDataXml, (err, result) => {
  //         //console.log('Channel information:', result.rss.channel);
  //         //console.log('List all news:', result.rss.channel[0]);
  //         this.setState({
  //           rss: result.rss.channel[0],
  //         });
  //       });
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }

  // componentDidMount() {
  //   this.getData();
  // }

  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}

//rss={this.state.rss}
