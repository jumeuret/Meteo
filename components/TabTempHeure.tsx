import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import {WEATHER_DATA} from "../data/stub";
import { WEATHER_DATA_Lyon_D1 } from "../data/stubLyon";
import TempHeure from "./TempHeure";
import Weather from "../class/Weather";
import moment, { Moment } from 'moment';

/**
 * Fonction qui réalise la vu de la météo de la journée à partir d'un ville précise
 * @returns 
 */
export default function TabTempHeure() {
  const tempHeures:Array<number> = new Array(7);
  const heureDay : string[] = []
  for( var i=0; i<24; i++){
    heureDay.push(i+":59:59")
  }

  return (
    <View style={TabTempHeureStyle.container}> 
      <ScrollView horizontal={true}> 
        {heureDay.map((heure, index)=>
            <TempHeure key={i} ville="lyon" jour="lundi" heure={heure}/>
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

