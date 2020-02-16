import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// class Papers extends React.Component {
//   constructor(props) {
//     super(props);
// }
// render() {
function Papers({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <TouchableOpacity
        accessibilityRole={'button'}
        onPress={() => navigation.navigate('PapersItem')}
        style={styles.linkContainer}>
        <Text style={styles.link}>Example Paper</Text>
      </TouchableOpacity>
    </View>
  );
}
//}
//}
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
    justifyContent: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '400',
    color: 'blue',
    fontFamily: 'Courier-Bold',
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    fontFamily: 'Courier-Bold',
    //color: Colors.dark,
  },
  separator: {
    //top: 20,
    backgroundColor: 'black',
    height: 1,
  },
});

export default Papers;

//<Text style={styles.description}>Test 1'</Text>;
