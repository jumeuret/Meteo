import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';



export default class DayWeather extends Component{

    render(){
        return (
            <View style={jourStyle.container}> 
            <Text style={jourStyle.title}> Nom :  </Text>
            <Text> Température : </Text>
            </View>
        )
    }  
}
  
const jourStyle = StyleSheet.create({
    container : {
      flex : 1
    },
    title : {
      fontSize : 42,
      fontWeight : "bold"
    }
  });

