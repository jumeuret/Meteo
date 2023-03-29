import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { WEATHER_DATA_Lyon_D1} from "../data/stubLyon";
import  TabTempHeure  from "./TabTempHeure";

/**
 * Fonction qui recupère la température associé au 3 moments clés de la journée, à savoir 6h le matin, 12 h le midi et 19h le soir.
 * @returns {Map<string, number>} - Une map contenant en clé le moment de la journée et en valeur la température qui lui est associée
 */
export function recuperationTempHeure() :  Map<string, number>{
  let TabTempHeure = new Map<string, number>();
  for (let i=0; i< WEATHER_DATA_Lyon_D1.length ; i++){
    if (WEATHER_DATA_Lyon_D1[i].at="2023-01-22 05:55:59"){
      TabTempHeure.set("Matin",WEATHER_DATA_Lyon_D1[i].temperature);
    }
    if (WEATHER_DATA_Lyon_D1[i].at="2023-01-22 11:55:59"){
      TabTempHeure.set("Midi",WEATHER_DATA_Lyon_D1[i].temperature);
    }
    if (WEATHER_DATA_Lyon_D1[i].at="2023-01-22 18:55:59"){
      TabTempHeure.set("Soir",WEATHER_DATA_Lyon_D1[i].temperature);
    }
  }
  return TabTempHeure;
} 


