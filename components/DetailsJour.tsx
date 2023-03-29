import {StyleSheet, View} from "react-native";
import Weather from "../modele/Weather";
import Details from "./Details";

type DetailsJourProps = {
    weather: Weather;
}

export default function DetailsJour(props: DetailsJourProps) {

    return (
        <View>
            <View style={styles.block}>
                <View style={styles.ligne}>
                    <Details valeur={props.weather.windSpeed} nom={"Vent"} unite={"Km/h"} logo={require('../assets/icones/vent.png')}/>
                </View>
                <View style={styles.ligne}>
                    <Details valeur={props.weather.pressure} nom={"Pression"} unite={"Pa"} logo={require('../assets/icones/pression.png')}/>
                </View>
                <View style={styles.ligne}>
                    <Details valeur={props.weather.humidity} nom={"Humidité"} unite={"%"} logo={require('../assets/icones/humidite.png')}/>
                </View>
                <View>
                    <Details valeur={props.weather.moonPhase} nom={"Phase \n lunaire"} unite={""} logo={require('../assets/icones/lunes.png')}/>
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
        width: 300,
        margin: 10,
    },
    ligne: {
        flex: 1,
        borderBottomWidth: 5,
    },
});