import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class NetError extends React.Component {
  render() {
    if (!this.props.error) return null;
    return (
      <View style={{backgroundColor: '#6f6f6d', flex: 1}}>
        <View style={styles.container}>
          <View style={styles.separator} />
          <Text style={styles.link}>Check your internet connection!</Text>
          <View style={styles.separator_2} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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

  separator: {
    backgroundColor: '#7a1414',
    height: 1,
  },

  separator_2: {
    backgroundColor: '#7a1414',
    height: 1,
    marginTop: 20,
  },
});
