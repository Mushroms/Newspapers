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
    <View style={{backgroundColor: '#6f6f6d', flex: 1}}>
      <ScrollView style={{marginTop: 80, marginBottom: 0}}>
        <View>{articlesTags}</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
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
    //fontFamily: 'Courier-Bold',
  },
  description: {
    color: '#F9FBE7',
    paddingVertical: 10,
    fontWeight: '400',
    fontSize: 18,
    //fontFamily: 'Courier-Bold',
  },
  separator: {
    backgroundColor: '#F9FBE7',
    height: 1,
  },
});

export default Articles;
