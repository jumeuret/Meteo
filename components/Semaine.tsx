import React, { Component } from "react";
import { StyleSheet, ScrollView } from 'react-native';
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import DayWeather from "./DayWeather";

/**
 * Fonction qui réalise la vue de la météo de la semaine correspondant à une ville précise.
 * @returns 
 */
export default function Semaine() {
  const dayWeek : string[] = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]
  return (
    <ScrollView horizontal={false} contentContainerStyle={semaineStyle.container}>
      {dayWeek.map((jour, index)=>
        <DayWeather key={index} jour={jour} ville="lyon" />
      )}
    </ScrollView>
  );
};
  
const semaineStyle = StyleSheet.create({
    container : {
      flex : 1,
      marginTop: 10,
      padding : 10,
      alignItems : "center"
    }
  });

