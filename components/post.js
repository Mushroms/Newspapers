import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

function Post(props) {
  const {route} = props;
  const {item} = route.params;
  const PostObj = item.description;

  return (
    <View style={{backgroundColor: '#6f6f6d', flex: 1}}>
      <ScrollView style={{top: '11%'}}>
        <View style={styles.container}>
          <View style={styles.separator} />
          <Text style={styles.textPost}>{PostObj}</Text>
          <View style={styles.separator_2} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    //height: '100%',
    //marginTop: '20%',
    marginBottom: 80,
    paddingHorizontal: 24,
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
});

export default Post;
