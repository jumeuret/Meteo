import React, { Component } from "react";
import { StyleSheet, ScrollView } from 'react-native';
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import DayWeather from "./DayWeather";

/**
 * Fonction qui réalise la vue de la météo de la semaine correspondant à une ville précise
 * @returns une scrollView qui, pour chaque jour de la semaine et une ville donnée, affiche la vue du composant DayWeather
 */
export default function Semaine(villeActuel : any) {
  const dayWeek : string[] = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]
  const dateWeek : string[] = ["2023-01-22", "2023-01-23", "2023-01-24", "2023-01-25", "2023-01-26", "2023-01-27", "2023-01-28"]

  return (
    <ScrollView horizontal={false} contentContainerStyle={semaineStyle.container}>
      {dayWeek.map((jour, index)=>
        <DayWeather key={index} jour={jour} ville={villeActuel} />
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

