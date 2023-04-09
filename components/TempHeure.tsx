import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import moment, {Moment} from 'moment';
import * as stub from "../data/Stub/stub"
import Weather from "../modele/Weather";

type JourPropos = {
  heure : string;
  ville : string;
  jour : string;
}
/**
 * Fonction qui permet de récupérer, pour chaque heure de la journée la température associée
 * @param props les paramètres correspondants à un jour précis
 * @returns une map ayant pour clée l'heure de la journée et pour valeur la température
 */
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
    if(date.format(jourRecup[i].at.split(" ")[0])==props.jour){
      // Ne rentre pas dans le if
      for(var j=0; j<jourRecup.length; j++){
        //console.log("helllo", j, jourRecup.length);
        //console.log(props.heure);
        //fait de la merde
          if(jourRecup[j].at.split(" ")[1]===props.heure){
            momentJour["heure"]=jourRecup[j].temperature;
            return momentJour;
          }
        }
    }
  }
  return momentJour
}

/**
 * Fonction qui permet d'afficher l'heure et la température d'un moment de la journée
 * @param param0
 * @returns la vue de ce moment de la journée
 */
export default function TempHeure({ville, heure, jour} : {ville : string, heure : string, jour : string}) {
const momentD : {[key : string] : number} = RecupeMomentJour({heure, ville, jour});

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
        borderEndWidth: 2.5,
        borderStartWidth: 2.5,
        padding : 10,
    }
  });

