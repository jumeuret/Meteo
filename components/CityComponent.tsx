import {View, StyleSheet, Text, Image, Touchable, TouchableOpacity, Button} from "react-native";
import React from "react";
import City from "../modele/City";
import {useSelector} from "react-redux";
import {DELETE_FAVOURITE_CITY} from "../redux/Constants";

type CityProp = {
    city : City
    favourite : boolean
}
export default function CityComponent(props : CityProp, {navigation} : any) {

    if (props.favourite){
        return (
            <View style={dayWeatherStyle.container}>
                <View style={dayWeatherStyle.border}>
                    <Text> {props.city.name} </Text>
                    <TouchableOpacity onPress={ () => {
                        // @ts-ignore
                        useSelector(state => state.cityReducer(state, "ADD_CITY_TO_FAVOURITES"));
                        navigation.navigate("Cities");
                        }}>
                        <Image style={dayWeatherStyle.image} source={require("../assets/icones/StarFull.png")}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    else{
        return (
            <View style={dayWeatherStyle.container}>
                <View style={dayWeatherStyle.border}>
                    <Text> {props.city.name} </Text>
                    <TouchableOpacity onPress={ () => {
                        // @ts-ignore
                        useSelector(state => state.cityReducer(state, "DELETE_FAVOURITE_CITY"));
                        navigation.navigate("Cities");
                    }}>
                        <Image style={dayWeatherStyle.image} source={require("../assets/icones/StarEmpty.png")}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const dayWeatherStyle = StyleSheet.create({
        container : {
            display: "flex",
            backgroundColor: '#DFD3C3',
            borderColor : 'black',
            alignItems: "center",
        },
        border: {
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 5,
            borderBottomWidth: 2.5,
            borderTopWidth: 2.5,
            borderWidth: 5,
            margin: 0,
            padding : 10,
            width: 200,
            justifyContent: "space-between",
        },
        image: {
        width: 50,
        height: 50,
    },

});