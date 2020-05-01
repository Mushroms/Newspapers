import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class NetError extends React.Component {
  render() {
    if (!this.props.error) return null;
    return (
      <View style={{backgroundColor: '#6f7d98', flex: 1}}>
        <View style={styles.container}>
          <View style={styles.separator} />
          <Text style={styles.link}>Ресурс временно не доступен</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    paddingHorizontal: 24,
    backgroundColor: '#6f7d98',
  },

  link: {
    justifyContent: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: '400',
    color: '#F9FBE7',
    backgroundColor: '#6f7d98',
    fontFamily: 'Courier-Bold',
  },

  separator: {
    backgroundColor: '#F9FBE7',
    height: 1,
  },
});
