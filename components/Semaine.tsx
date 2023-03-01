import React, { Component } from "react";
import { StyleSheet, ScrollView } from 'react-native';
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import DayWeather from "./DayWeather";

type Semaine = {
  name : string ;
  tempMoyenne : Float;
}

export default function Semaine() {
    const board:Array<number> = new Array(7);
  return (
    <ScrollView horizontal={true} style={semaineStyle.container}>
      {board.fill(0).map((_,i)=>
          <DayWeather key={i} />
      )}
    </ScrollView>
  );
};
  
const semaineStyle = StyleSheet.create({
    container : {
      flex : 1,
      marginTop: 10,
      padding : 10,
      alignItems : "center"
    }
  });

