import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

function Post(props) {
  const {route} = props;
  const {item} = route.params;
  const PostObj = item.description;
  const url = item.link;

  return (
    <View style={{backgroundColor: '#6f6f6d', flex: 1}}>
      <ScrollView style={{top: '7%'}}>
        <View style={styles.container}>
          <View style={styles.separator} />
          <Text style={styles.textPost}>{PostObj}</Text>
          <View style={styles.separator_2} />
          <TouchableOpacity onPress={() => Linking.openURL(url)}>
            <Text style={styles.Url_link}>Read more</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: '30%',
    paddingHorizontal: 28,
    paddingVertical: 20,
  },

  separator: {
    backgroundColor: '#F9FBE7',
    height: 1,
  },
  separator_2: {
    backgroundColor: '#F9FBE7',
    height: 1,
    marginTop: 20,
  },
  textPost: {
    flex: 2,
    justifyContent: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: '400',
    color: '#F9FBE7',
    //fontFamily: 'Courier-Bold',
  },
  Url_link: {
    flex: 1,
    color: '#a5c7f3',
    marginTop: 15,
    fontSize: 17,
  },
});

export default Post;
