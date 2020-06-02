import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class NetError extends React.Component {
  render() {
    if (!this.props.error) return null;
    return (
      <View style={styles.container}>
        <View style={styles.separator} />
        <View style={styles.linkContainer}>
          <Text style={styles.link}>Check your internet connection!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    // flex: 1,
    //marginTop: 10,
    paddingHorizontal: 24,
    backgroundColor: '#6f7d98',
  },

  link: {
    justifyContent: 'center',
    marginTop: 10,
    flexDirection: 'row',
    fontSize: 20,
    fontWeight: '400',
    color: '#F9FBE7',
    backgroundColor: '#6f7d98',
    //alignItems: 'center',
    position: 'relative',
    //fontFamily: 'Courier-Bold',
  },
  linkContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },

  separator: {
    //marginTop: 40,
    backgroundColor: '#F9FBE7',
    height: 1,
  },
});
