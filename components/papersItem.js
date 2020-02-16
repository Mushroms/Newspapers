//import type {Node} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

// class PapersItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
function PapersItem({navigation}) {
  // const {navigate} = this.props.navigation;
  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <TouchableOpacity
        accessibilityRole={'button'}
        onPress={() => navigation.navigate('papersItem')}
        style={styles.linkContainer}>
        <Text style={styles.link}>Example PaperItem</Text>
        <Text style={styles.description}>Test 1</Text>
      </TouchableOpacity>
    </View>
  );
}
//   }
// }
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

export default PapersItem;
