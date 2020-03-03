import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FetchRss from './fetchRss';
function Papers({navigation}) {
  return (
    <View style={{backgroundColor: '#6f7d98', flex: 1}}>
      <View style={styles.container}>
        <View style={styles.separator} />
        <TouchableOpacity
          accessibilityRole={'button'}
          onPress={() => navigation.navigate('Articles')}
          style={styles.linkContainer}>
          <FetchRss />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    paddingHorizontal: 24,
    backgroundColor: '#6f7d98',
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#6f7d98',
  },
  link: {
    flex: 2,
    justifyContent: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: '400',
    color: '#F9FBE7',
    backgroundColor: '#6f7d98',
    fontFamily: 'Courier-Bold',
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    backgroundColor: '#6f7d98',
    fontFamily: 'Courier-Bold',
  },
  separator: {
    backgroundColor: '#F9FBE7',
    height: 1,
  },
});

export default Papers;

//<Text style={styles.link}>Example Paper</Text>;
