import React, { Component } from "react";
import moment, { Moment } from 'moment';
import { StyleSheet, Text, View } from 'react-native';
import * as stub from "../data/stub"
import Weather from "../class/Weather";

type RecupDataProps = {
  jour : string;
  ville : string;
}

export function RecupDataDayWeather(props : RecupDataProps) : {[key : string] : number }{

  const date: Moment = moment();
  var data : {[key : string] : number }= {};
  let jourRecup : any ;

  var listWeather : Weather [][]; 

  switch(props.ville){
    case "lyon" : listWeather = stub.tabLyon; break;
    case "clermont" : listWeather = stub.tabClermont; break;
    case "paris" : listWeather = stub.tabParis; break;
    case "marseille" : listWeather = stub.tabMarseille; break;
    default : listWeather = stub.tabBruxelles; break;
  }

  for (let i=0; i< listWeather.length ; i++){
    
    jourRecup = listWeather[i];
    if (date.format(jourRecup[i].at.split(" ")[0])==props.jour ){
      var sumTemp : number =0;
      var tempMax : number=0;
      var tempMini : number =jourRecup[0];
      for (let j=0; j<jourRecup.length ; j++){
        if(tempMini > jourRecup[j]){
          tempMini = jourRecup[j]
        }
        if(tempMax< jourRecup[j]){
          tempMax = jourRecup[j]
        }
        sumTemp +=  jourRecup[j].temperature;
      }
      var tempMoyenne : number =  sumTemp/24;
      data["temperatureMoyenne"] = 8 ;
      data["temperatureMini"] = tempMini ; 
      data["temperatureMax"] = tempMax ; 
      return data;
    }  
  } 
  return data;
}

/**
 * Fonction qui réalise la vue du détaille d'un jour à partir d'information reçue en paramètre 
 * @param {string} jour - Le nom du jour voulu
 * @param {string} ville - Le nom de la ville voul
 * @returns 
 */
export default function DayWeather({ jour, ville }: { jour: string, ville: string }) {
const tempData : {[key : string] : number }= RecupDataDayWeather({jour, ville});

  return (
    <View style={dayWeatherStyle.container}> 
      <View style={dayWeatherStyle.border}>
        <Text> lundi</Text>
      </View>
      <View style={dayWeatherStyle.border}>
        <Text> Température moyenne </Text>
        <Text> {tempData.temperatureMoyenne}°C </Text>
      </View>
      <View style={dayWeatherStyle.border}>
        <Text> intervalle : </Text>
        <Text>{tempData.temperatureMini}°C - {tempData.temperatureMax} °C</Text>
      </View>
    </View>
  );
};


/**
 * 
 */
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

