/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Papers from './components/papers';

const App: () => React$Node = () => {
  return (
    <>
      <Papers />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
