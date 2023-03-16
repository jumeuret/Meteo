import {Image, StyleSheet, View} from "react-native";
import Infos from "./Infos";
import {Weather} from "../data/stub";
import Details from "./Details";
import {useState} from "react";

type DetailsJourProps = {
    weather: Weather;
}

export default function DetailsJour(props: DetailsJourProps) {


    return (
        <View>
            <View style={styles.block}>
                <View>
                    <Details valeur={props.weather.windSpeed} nom={"Vent"} unite={"Km/h"} logo={'../assets/icones/vent.png'}/>
                </View>
                <View>
                    <Details valeur={props.weather.pressure} nom={"Pression"} unite={"Pa"} logo={'../assets/icones/pression.png'}/>
                </View>
                <View>
                    <Details valeur={props.weather.humidity} nom={"Humidité"} unite={"%"} logo={'../assets/icones/humidite.png'}/>
                </View>
                <View>
                    <Details valeur={props.weather.moon} nom={"Phase lunaire"} unite={""} logo={'../assets/icones/lunes.png'}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: '#DFD3C3',
        borderWidth: 5,
        borderColor: "black",
        borderRadius: 5,
        width: 225,
    },
    ligne: {
        flex: 1,
        flexDirection: "row-reverse",
        justifyContent: "space-evenly",
    },
    haut_droite: {
        alignItems: "flex-end",
    },
    image: {
        width: 150,
        height: 150,
    },
    conteneur: {
        alignItems: "center",
    },
});