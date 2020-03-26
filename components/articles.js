//import type {Node} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

function Articles(props) {
  const {route, navigation} = props;
  const {item} = route.params;
  const {articles} = item;
  const articlesTags = articles.map(article => {
    return (
      <View style={styles.container}>
        <View style={styles.separator} />
        <TouchableOpacity
          accessibilityRole={'button'}
          onPress={() => navigation.navigate('Post', {item: articles})}
          style={styles.linkContainer}>
          <Text key={article.id} style={styles.description}>
            {article.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  });

  //console.warn('route', articles);
  return (
    <View style={{backgroundColor: '#6f7d98', flex: 1}}>
      <ScrollView style={{marginTop: 100}}>
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
    fontFamily: 'Courier-Bold',
  },
  description: {
    //flex: 3,

    color: '#F9FBE7',
    paddingVertical: 10,
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
//style={styles.link}
