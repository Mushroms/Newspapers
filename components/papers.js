import type {Node} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const links = [
  {
    title: 'Example Paper',
    link: 'https://facebook.github.io/react-native/docs/style',
    description: 'Example',
  },
  {
    title: 'Example Paper',
    link: 'https://facebook.github.io/react-native/docs/style',
    description: 'Example',
  },
  {
    title: 'Example Paper',
    link: 'https://facebook.github.io/react-native/docs/style',
    description: 'Example',
  },
  {
    title: 'Example Paper',
    link: 'https://facebook.github.io/react-native/docs/style',
    description: 'Example',
  },
];

const papers = (): Node => (
  <View style={styles.container}>
    {links.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <View style={styles.separator} />
          <TouchableOpacity
            accessibilityRole={'button'}
            //onPress={() => }
            style={styles.linkContainer}>
            <Text style={styles.link}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        </React.Fragment>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
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
    fontSize: 18,
    fontWeight: '400',
    color: 'blue',
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    //color: Colors.dark,
  },
  separator: {
    //top: 20,
    backgroundColor: 'black',
    height: 1,
  },
});

export default papers;
