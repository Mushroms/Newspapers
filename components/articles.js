/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

function Articles(props) {
  const {route, navigation} = props;
  const {articlesList} = route.params;
  const articlesTags = articlesList.map((article, index) => {
    return (
      <View key={index} style={styles.container}>
        <View style={styles.separator} />
        <TouchableOpacity
          accessibilityRole={'button'}
          onPress={() => navigation.navigate('Post', {item: article})}
          style={styles.linkContainer}>
          <Text style={styles.description}>{article.title}</Text>
        </TouchableOpacity>
      </View>
    );
  });

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: '#6f6f6d',
        flex: 1,
      }}>
      <View
        style={{
          //flex: 1,
          height: '100%',
          backgroundColor: '#6f6f6d',
          marginTop: '2%',
        }}>
        <ScrollView style={{marginTop: '22%'}}>
          <View style={styles.container}>{articlesTags}</View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,

    backgroundColor: '#6f6f6d',
  },

  separator: {
    backgroundColor: '#F9FBE7',
    height: 1,
  },

  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
  },

  description: {
    color: '#F9FBE7',
    paddingVertical: 1,
    fontWeight: '400',
    fontSize: 18,
    //fontFamily: 'Courier-Bold',
  },
});

export default Articles;
