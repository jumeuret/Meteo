import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import {WEATHER_DATA} from "../data/stub";
import { WEATHER_DATA_Lyon_D1 } from "../data/stubLyon";
import TempHeure from "./TempHeure";
import Weather from "../class/Weather";
import moment, { Moment } from 'moment';

/**
 * Fonction qui réalise la vue de la météo de la journée à partir d'un ville précise
 * @returns une srollview qui, pour une ville, retourne pour chaque heure la vue du composant TempHeure
 */
export default function TabTempHeure() {
  const tempHeures:Array<number> = new Array(7);
  const heureDay : string[] = []
  for( var i=0; i<24; i++){
    heureDay.push(i+":55:59")
  }

  return (
    <View style={TabTempHeureStyle.container}> 
      <ScrollView horizontal={true}> 
        {heureDay.map((heure, index)=>
            <TempHeure key={index} ville="paris" jour="2023-01-28" heure={heure}/>
        )}
    </ScrollView>
    </View>
  );
};
  
const TabTempHeureStyle = StyleSheet.create({
    container : {
      alignItems : 'center',
      justifyContent : 'center',
      display: "flex",
      margin: 10,
    }   
  });

