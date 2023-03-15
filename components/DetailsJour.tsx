import {Image, StyleSheet, View} from "react-native";
import Infos from "./Infos";
import {Weather} from "../data/stub";
import Details from "./Details";

type DetailsJourProps = {
    weather: Weather;
}

export default function DetailsJour(props: DetailsJourProps) {
    return (
        <View>
            <View style={styles.block}>
                <View style={styles.haut_droite}>
                    <Details valeur={props.weather.windSpeed} nom={"Vent"} unite={"Km/h"} logo={"../asset/kisspng-computer-icons-wind-cloud-symbol-clip-art-5b3a6ef5c85f40.4435802315305561498207.png"}/>
                </View>
                <View style={styles.conteneur}>
                    <Image style={styles.image} source={require('../assets/Nature-Soleil-157185.png')}/></View>
                <View style={styles.ligne}>
                    <Infos time={props.periodes[1]} value={props.meteo["matin"]} />
                    <Infos time={props.periodes[2]} value={props.meteo["apres-midi"]} />
                    <Infos time={props.periodes[3]} value={props.meteo["soir"]} />
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