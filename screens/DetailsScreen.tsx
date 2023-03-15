import {StyleSheet, View} from "react-native";
import InfosJour from "../components/InfosJour";
import {recuperationTemp} from "../components/CarreMillieu";
import {City, getCurrentWeather, getWeather, PERIODES, WEATHER_DATA_Lyon_D1} from "../data/stub";
import TabTempHeure from "../components/TabTempHeure";
import Semaine from "../components/Semaine";
import DetailsJour from "../components/DetailsJour";

type DetailsScreenProps = {
    city: string
    date: string
}

export default function DetailsScreen(props : DetailsScreenProps) {
    return (
        <View style={styles.container}>
            <DetailsJour weather={getWeather(props.city, props.date)} periodes={PERIODES}/>
            <TabTempHeure/>
            <Semaine/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5CB8C"
    }
});