import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {ImageBackground} from 'react-native';
import PaperBackImage from '../src/black_paper_@2X.png';

function Post({navigation}) {
  return (
    <ImageBackground
      source={PaperBackImage}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <View style={styles.separator} />
        <ScrollView>
          <Text style={styles.textPost}>Testssssssss</Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    paddingHorizontal: 24,
  },

  separator: {
    backgroundColor: 'white',
    height: 1,
  },
  textPost: {
    flex: 2,
    justifyContent: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
    fontFamily: 'Courier-Bold',
  },
});

export default Post;
