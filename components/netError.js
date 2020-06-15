import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import RNRestart from 'react-native-restart';

export default class NetError extends React.Component {
  onButtonClick = () => {
    RNRestart.Restart();
  };

  render() {
    if (!this.props.error) return null;
    return (
      <View style={styles.container}>
        <View style={styles.separator} />
        <Text style={styles.link}>Check your internet connection!</Text>
        <View style={styles.separator_2} />
        <TouchableOpacity
          style={styles.buttonRefresh}
          onPress={this.onButtonClick}>
          <Text style={styles.link_2}>Tap To Restart App</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    height: '100%',
    width: '100%',
    marginTop: 90,
    paddingHorizontal: 24,
    backgroundColor: '#6f6f6d',
  },

  link: {
    justifyContent: 'center',
    marginTop: 20,
    fontSize: 23,
    fontWeight: '400',
    color: '#7a1414',
    backgroundColor: '#6f6f6d',
  },

  link_2: {
    justifyContent: 'center',
    fontSize: 35,
    fontWeight: '400',
    color: '#7a1414',
    backgroundColor: '#6f6f6d',
  },

  separator: {
    backgroundColor: '#7a1414',
    height: 1,
  },

  separator_2: {
    backgroundColor: '#7a1414',
    height: 1,
    marginTop: 20,
  },

  buttonRefresh: {
    flex: 1,
    marginTop: 160,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 23,
    fontWeight: '400',
    color: '#7a1414',
  },
});
