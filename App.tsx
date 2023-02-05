import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import DayWheather from "./Component/DayWeather";
import React from 'react'

export default function App(){
  return (
    <View style={styles.container}>
      <Text>ss</Text>
      <Text>And I'm really</Text>
      <View style={styles.beauty}>
        <Text>BEAUTIFUL</Text>
        </View>
      <StatusBar style="auto" />
      <DayWheather/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  beauty: {
    backgroundColor: '#AAF',
  },
});
