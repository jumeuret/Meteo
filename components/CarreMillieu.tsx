import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { Weather, WEATHER_DATA_Lyon_D1} from "../data/stub";
import  TabTempHeure  from "./TabTempHeure";


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


