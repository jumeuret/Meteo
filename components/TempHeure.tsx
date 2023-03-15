import React from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import moment, { Moment } from 'moment';
import * as stub from "../data/stub"
import Weather from "../class/Weather";

type JourPropos = {
  heure : string;
  ville : string;
  jour : string;
}

export function RecupeMomentJour(props : JourPropos) : {[key : string] : number }{
  var listWeather : Weather [][]; 
  var momentJour : {[key : string] : number}= {};
  const date: Moment = moment();

  let jourRecup  : any;

  switch(props.ville){
    case "lyon" : listWeather = stub.tabLyon; break;
    case "clermont" : listWeather = stub.tabClermont; break;
    case "paris" : listWeather = stub.tabParis; break;
    case "marseille" : listWeather = stub.tabMarseille; break;
    default : listWeather = stub.tabBruxelles; break;
  }
  for(var i=0; i < listWeather.length; i++){
    jourRecup = listWeather[i];
    console.log("Coucou"+i);
    console.log(date.format(jourRecup[i].at.split(" ")[0]));
    if(date.format(jourRecup[i].at.split(" ")[0])==props.jour){
      // Ne rentre pas dans le if
        for(var j=0; j<jourRecup.lenght; j++){
          if(jourRecup[j].heure===props.heure){
            // momentJour["heure"]=jourRecup[j].temperature;
            momentJour["heure"]=12;
            return momentJour;
          }
        }
    }
  }
  return momentJour
}

export default function TempHeure({ville, heure, jour} : {ville : string, heure : string, jour : string}) {
const momentD : {[key : string] : number } = RecupeMomentJour({heure, ville, jour});
console.log(momentD)

  return (
    <View style={tempHeureStyle.container}> 
        <Text> heure : {heure}h</Text>
        <Text> Température : {momentD.heure}°C </Text>
    </View>
  );
};
  
const tempHeureStyle = StyleSheet.create({
    container : {
      backgroundColor: '#DFD3C3',
      borderColor : 'black',
      borderWidth: 3,
    }
  });

