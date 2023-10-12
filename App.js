import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Splashscreen } from './Component/SplashScreen';
import { Navigate } from './Src/AppNavigator';
import { useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { MainScreen } from './Src/BottomPannel/MainScreen';
import store from './Src/Redux/store/Store';

export default function App() {
  return (
     <Navigate/>
    // <Provider store={store}>
    //   <MainScreen/>
    // </Provider>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

{/* <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>my name</Text>
      <Splashscreen />
      <Navigate/>
    </View> */}