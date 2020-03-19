//import type {Node} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

function Articles(props) {
  const {route} = props;
  const {item} = route.params;
  const {article} = item;
  console.warn('route', route.params);
  return (
    <View style={{backgroundColor: '#6f7d98', flex: 1}}>
      <View style={styles.container}>
        <View style={styles.separator} />
        <TouchableOpacity
          accessibilityRole={'button'}
          onPress={() => navigation.navigate('Post')}
          style={styles.linkContainer}>
          <Text style={styles.link}>{article}</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    color: '#F9FBE7',
    fontFamily: 'Courier-Bold',
  },
  description: {
    flex: 3,
    color: '#F9FBE7',
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    fontFamily: 'Courier-Bold',
  },
  separator: {
    backgroundColor: '#F9FBE7',
    height: 1,
  },
});

export default Articles;
