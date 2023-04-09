import City from "../modele/City";
import {FlatList, Image, StyleSheet, View} from "react-native";
import React from "react";
import {CITIES_DATA, FAVORITE_CITY_DATA} from "../data/Stub/stub";
import CityComponent from "./CityComponent";

type CitiesProp = {
    cities : City[]
    favouriteCities : City[]
}
export default function Cities(props : CitiesProp) {

    //props.cities.forEach(elt => console.log("ELT : " + elt.name))
    return(
        <View style={dayWeatherStyle.container}>
            {props.favouriteCities.map((City,i)=>
                <CityComponent key={i} city={City} favourite={false}/>
            )}
            {props.cities.map((City,i)=>
                <CityComponent key={i} city={City} favourite={true}/>
            )}
        </View>
    )
}

const dayWeatherStyle = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection : "column-reverse",
        backgroundColor: '#DFD3C3',
        borderColor: 'black',
    },
})
