import City from "../modele/City";
import {FlatList, View} from "react-native";
import React from "react";
import {CITIES_DATA, FAVORITE_CITY_DATA} from "../data/Stub/stub";
import CityComponent from "./City";

type CitiesProp = {
    cities : City[]
    favouriteCities : City[]
}
export default function Cities(props : CitiesProp) {

    props.cities = CITIES_DATA
    props.favouriteCities = FAVORITE_CITY_DATA;

    return(
        <View>
            <FlatList data={props.cities} renderItem={({item}) => <CityComponent city={item} />} keyExtractor={item => item.name}/>
        </View>
    )
}
