import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { WEATHER_DATA} from "../data/stub";
import { TempHeure} from "./TempHeure"


type Day = {
  name : string ;
  tempMoyenne : Float;
}

export const TabTempHeure: React.FC<{}> = props => {
  const tempHeures:Array<number> = new Array(7);

  return (
    <View style={TabTempHeureStyle.container}> 
      <ScrollView horizontal={true} style={ TabTempHeureStyle.ScrollView}> 
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
      alignItems: 'baseline',
      display: "flex",
      margin: 10,
    },
    ScrollView : {
      borderColor: 'black',
      borderTopLeftRadius: 30,
      margin : 10,
    },
    
  });

