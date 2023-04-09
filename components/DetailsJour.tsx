import {StyleSheet, View} from "react-native";
import Weather from "../modele/Weather";
import Details from "./Details";
import {MoonPhase} from "../modele/MoonPhase";

type DetailsJourProps = {
    weather: Weather;
}

export default function DetailsJour(props: DetailsJourProps) {

    var source: string;
    switch (props.weather.moonPhase){
        case MoonPhase.Nouvelle:
            source = "nouvelleLune.png"
            break
        case MoonPhase.PremierQuartier:
            source = "premierQuartier.png"
            break
        case MoonPhase.DernierCroissant:
            source = "dernierCroissant.png"
            break
        case MoonPhase.DernierQuartier:
            source = "dernierQuartier.png"
            break
        case MoonPhase.GibbeuseCroissante:
            source = "gibbeuseCroissante.png"
            break
        case MoonPhase.GibbeuseDecroissante:
            source = "gibbeuseDecroissante.png"
            break
        case MoonPhase.PremierCroissant:
            source = "premierCroissant.png"
            break
        default:
            source = "pleineLune.png"
            break
    }
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
                    <Details valeur={props.weather.moonPhase} nom={"Phase \n lunaire"} unite={""} logo={require('../assets/icones/lune/' + source)}/>
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