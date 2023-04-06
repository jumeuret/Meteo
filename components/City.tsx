import {View, StyleSheet, Text} from "react-native";
import React from "react";
import City from "../modele/City";

type CityProp = {
    city : City
}
export default function CityComponent(props : CityProp) {

    return (
        <View style={dayWeatherStyle.container}>
            <View style={dayWeatherStyle.border}>
                <Text> {props.city.name} </Text>
            </View>
        </View>
    )
}

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