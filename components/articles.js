//import type {Node} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ImageBackground} from 'react-native';
import PaperBackImage from '../src/black_paper_@2X.png';

function Articles({navigation}) {
  return (
    <ImageBackground
      source={PaperBackImage}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <View style={styles.separator} />
        <TouchableOpacity
          accessibilityRole={'button'}
          onPress={() => navigation.navigate('Post')}
          style={styles.linkContainer}>
          <Text style={styles.link}>Example PaperItem</Text>
          <Text style={styles.description}>Test 1</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  link: {
    flex: 2,
    marginTop: 20,
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
    fontFamily: 'Courier-Bold',
  },
  description: {
    flex: 3,
    color: 'white',
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    fontFamily: 'Courier-Bold',
  },
  separator: {
    backgroundColor: 'white',
    height: 1,
  },
});

export default Articles;
