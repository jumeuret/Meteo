import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { WEATHER_DATA} from "../data/stub";


type Day = {
  name : string ;
  tempMoyenne : Float;
}

export const DayWeather: React.FC<{}> = props => {

  return (
    <View style={dayWeatherStyle.container}> 
      <Text> Lundi</Text>
      <View>
        <Text> Température moyenne </Text>
        <Text> 14°C </Text>
      </View>
      <View>
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
      margin : 5,
    },
  });

