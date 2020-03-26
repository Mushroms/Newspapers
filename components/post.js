import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

function Post(props) {
  const {route, navigation} = props;
  const {item} = route.params;
  const {articles} = item;
  console.warn('routePost', item);
  const postsTag = item.map((items, id) => {
    if (id === id)
      return (
        <Text key={items.id} style={styles.description}>
          {items.description}
        </Text>
      );
  });

  return (
    <View style={{backgroundColor: '#6f7d98', flex: 1}}>
      <View style={styles.container}>
        <View style={styles.separator} />
        <ScrollView>{postsTag}</ScrollView>
      </View>
    </View>
  );
}

//console.warn('route', article);

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    paddingHorizontal: 24,
  },

  separator: {
    backgroundColor: '#F9FBE7',
    height: 1,
  },
  textPost: {
    flex: 2,
    justifyContent: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: '400',
    color: '#F9FBE7',
    fontFamily: 'Courier-Bold',
  },
});

export default Post;
