import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

function Post() {
  return (
    <View style={{backgroundColor: '#6f7d98', flex: 1}}>
      <View style={styles.container}>
        <View style={styles.separator} />
        <ScrollView>
          <Text style={styles.textPost}>
            Flex Wrap The flexWrap property is set on containers and controls
            what happens when children overflow the size of the container along
            the main axis. By default children are forced into a single line
            (which can shrink elements). If wrapping is allowed items are
            wrapped into multiple lines along the main axis if needed. When
            wrapping lines alignContent can be used to specify how the lines are
            placed in the container. learn more here
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

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
