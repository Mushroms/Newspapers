import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class NetError extends React.Component {
  render() {
    if (!this.props.error) return null;
    return (
      <View style={{backgroundColor: '#5b5b5b', flex: 1}}>
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
    backgroundColor: '#5b5b5b',
  },

  link: {
    justifyContent: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: '400',
    color: '#db196e',
    backgroundColor: '#5b5b5b',
  },

  separator: {
    backgroundColor: '#db196e',
    height: 1,
  },

  separator_2: {
    backgroundColor: '#db196e',
    height: 1,
    marginTop: 20,
  },
});
