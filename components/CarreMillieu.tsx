import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import {City, Weather, WEATHER_DATA_Lyon_D1} from "../data/stub";
import  TabTempHeure  from "./TabTempHeure";


export function recuperationTemp(meteos: Weather[], ville:City) : {[key: string]: number;}{
  var temperatures: {[key: string]: number;} = {}
  var current = "2023-01-22 22:55:59"
  var matin = []
  var apres_midi = []
  var soir = []
  //var current = moment().format('YYYY-MM-DD HH:mm:ss')
  for (let i = 0; i < meteos.length ; i ++) {
    if (meteos[i].city.name == ville.name) {
      var date_heure = meteos[i].at.split(' ');
      if (date_heure[0] == current.split(' ')[0]) {
        var heure_minute_seconde = date_heure[1].split(':')
        if (+heure_minute_seconde[0] >= 6 && +heure_minute_seconde[0] < 12) {
          matin.push(meteos[i].temperature)
        } else if (+heure_minute_seconde[0] >= 12 && +heure_minute_seconde[0] < 19) {
          apres_midi.push(meteos[i].temperature)
        } else {
          soir.push(meteos[i].temperature)
        }
      }
        console.log(matin);
        var moy_matin = 0
        matin.forEach((element) => {
          moy_matin = moy_matin + element
          console.log("- " + element);
        })
        temperatures["matin"] = +(moy_matin / matin.length).toFixed(2);
        console.log(temperatures["matin"]);

        console.log(apres_midi);
        var moy_apres_midi = 0
        apres_midi.forEach((element) => {
          moy_apres_midi = moy_apres_midi + element
          console.log("_ " + element);
        })
        temperatures["apres-midi"] = +(moy_apres_midi / apres_midi.length).toFixed(2);
        console.log(temperatures["apres-midi"]);

        console.log(soir);
        var moy_soir = 0
        soir.forEach((element) => {
          moy_soir = moy_soir + element
          console.log("~ " + element);
        })
        temperatures["soir"] = +(moy_soir / soir.length).toFixed(2);
        console.log(temperatures["soir"]);
    }
    if (meteos[i].at.toString() == current) {
      temperatures["maintenant"] = meteos[i].temperature;
    }
  }
  return temperatures;
} 


