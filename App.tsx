import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Appearance, Button } from 'react-native';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import {TabTempHeure} from "./Component/TabTempHeure";
import {Semaine} from "./Component/Semaine";

import HomeScreen from "./screens/HomeScreen";
import {CITIES_DATA} from "./data/stub";

import React from 'react'



export default function App(){
  return (

    <SafeAreaView style={styles.container}>
        <TabTempHeure/>
        <Semaine/>
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAA',

  }
});






