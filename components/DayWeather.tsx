import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { WEATHER_DATA_Lyon_D1} from "../data/stub";

// export function recuperationTempHeure() : string[] {
//   let tab : string[] = []
//   return ["truc"];

export default function DayWeather() {
  return (
    <View style={dayWeatherStyle.container}>
        <View style={dayWeatherStyle.borderLeft}>
            <Text> Lundi </Text>
        </View>
        <View style={dayWeatherStyle.border}>
            <Text> Température moyenne : </Text>
            <Text> 14°C </Text>
        </View>
        <View style={dayWeatherStyle.border}>
            <Text> Intervalle : </Text>
            <Text> 8°C - 16 °C</Text>
        </View>
    </View>
  );
};
  
const dayWeatherStyle = StyleSheet.create({
    container : {
        display: "flex",
        flexDirection : "row",
        backgroundColor: '#DFD3C3',
        borderColor : 'black',
    },
    border: {
        borderWidth: 2.5,
        margin: 0,
        padding : 10,
    },
    borderLeft: {
        borderWidth: 2.5,
        borderBottomWidth: 2,
        borderEndWidth: 2,
        padding : 20,
    }
  });

