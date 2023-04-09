import React from "react";
import {ScrollView, StyleSheet, View} from 'react-native';
import TempHeure from "./TempHeure";

/**
 * Fonction qui réalise la vue de la météo de la journée à partir d'un ville précise
 * @returns une srollview qui, pour une ville, retourne pour chaque heure la vue du composant TempHeure
 */
export default function TabTempHeure(villeActuel : any) {
  const tempHeures:Array<number> = new Array(7);
  const heureDay : string[] = []
  for( var i=0; i<24; i++){
    heureDay.push(i+":55:59")
  }

  return (
    <View style={TabTempHeureStyle.container}> 
      <ScrollView horizontal={true}>
        {heureDay.map((heure, index)=>
            <TempHeure key={index} ville={villeActuel} jour="2023-01-28" heure={heure}/>
        )}
      </ScrollView>
    </View>
  );
};
  
const TabTempHeureStyle = StyleSheet.create({
    container : {
        justifyContent : 'center',
        alignItems: 'baseline',
        display: "flex",
        margin: 10,
        borderColor : 'black',
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderEndWidth: 2.5,
        borderStartWidth: 2.5,
        borderRadius: 5,
    },
    ScrollView : {
        borderColor: 'black',
    },
    
  });

