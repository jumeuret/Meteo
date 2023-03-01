import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { WEATHER_DATA} from "../data/stub";
import TempHeure from "./TempHeure";


type Day = {
  name : string ;
  tempMoyenne : Float;
}

export default function TabTempHeure() {
  const tempHeures:Array<number> = new Array(7);

  return (
    <View style={TabTempHeureStyle.container}> 
      <ScrollView horizontal={true}> 
        {tempHeures.fill(0).map((_,i)=>
            <TempHeure key={i} />
        )}
    </ScrollView>
    </View>
  );
};
  
const TabTempHeureStyle = StyleSheet.create({
    container : {
      justifyContent : 'center',
      display: "flex",
      margin: 10,
    }   
  });

