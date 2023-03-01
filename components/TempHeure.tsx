import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { WEATHER_DATA} from "../data/stub"

export default function TempHeure() {
  const tempHeures:Array<number> = new Array(7);

  return (
    <View style={tempHeureStyle.container}> 
        <Text> heure : 7h</Text>
        <Text> Température : 20°C </Text>
    </View>
  );
};
  
const tempHeureStyle = StyleSheet.create({
    container : {
      backgroundColor: '#DFD3C3',
      borderColor : 'black',
      borderWidth: 3,
    }
  });

