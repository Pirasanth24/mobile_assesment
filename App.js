import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import Navigation from './src/navigation/index';


const App = () =>{
  return (
    <SafeAreaView  style ={styles.root}>
      <Navigation/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root : {
    flex: 1,
    backgroundColor : '#F9FBFC'
  },
});

export default App;