import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import {DayWeather} from "./DayWeather";

type Semaine = {
  name : string ;
  tempMoyenne : Float;
}

export const Semaine: React.FC<{}> = props => {
    const board:Array<number> = new Array(7);
  return (
    <View style={semaineStyle.container}>
            {board.fill(0).map((_,i)=>
                <DayWeather key={i} />
            )}
        </View>
  );
};
  
const semaineStyle = StyleSheet.create({
    container : {
      flex : 1,
      justifyContent : 'center'
    }
  });

