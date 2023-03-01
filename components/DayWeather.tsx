import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { WEATHER_DATA_Lyon_D1} from "../data/stubLyon";

// export function recuperationTempHeure() : string[] {
//   let tab : string[] = []
//   return ["truc"];

export default function DayWeather() {
  return (
    <View style={dayWeatherStyle.container}> 
      <View style={dayWeatherStyle.border}>
        <Text> Lundi</Text>
      </View>
      <View style={dayWeatherStyle.border}>
        <Text> Température moyenne </Text>
        <Text> 14°C </Text>
      </View>
      <View style={dayWeatherStyle.border}>
        <Text> intervalle : </Text>
        <Text> 8°C - 16 °C</Text>
      </View>
    </View>
  );
};
  
const dayWeatherStyle = StyleSheet.create({
    container : {
      alignItems: 'flex-start',
      display: "flex",
      flexDirection : "row",
    },
    border: {
      borderColor : 'black',
      borderWidth: 1,
      padding : 10,
      height : 70,
      justifyContent:"center"
    },
  
  });

