import React from "react";
import moment, {Moment} from 'moment';
import {StyleSheet, Text, View} from 'react-native';
import * as stub from "../data/stub"
import Weather from "../modele/Weather";

type RecupDataProps = {
  jour : string;
  ville : string;
}
/**
 * Fonction qui, pour un jour et une ville donnée, permet de caclulée des informations sur la température de cette journée (température moyenne, minimum et maximum)
 * @param props 
 * @returns une map contenant les informations
 */
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
    if(date.format(jourRecup[i].at.split(" ")[0])==props.jour ){
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
      data["temperatureMoyenne"] = tempMoyenne ;
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
 * @param {string} ville - Le nom de la ville voulu
 * @returns La vue associée à ce détail de la journée
 */
export default function DayWeather({ jour, ville }: { jour: string, ville: string }) {
const tempData : {[key : string] : number }= RecupDataDayWeather({jour, ville});
//console.log("DayWeather", tempData)

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

