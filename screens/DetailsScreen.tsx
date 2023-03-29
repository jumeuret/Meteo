import {StyleSheet, View} from "react-native";
import InfosJour from "../components/InfosJour";
import {recuperationTemp} from "../components/CarreMillieu";
import {City, getCurrentWeather, getWeather, PERIODES, Weather, WEATHER_DATA_Lyon_D1} from "../data/stub";
import TabTempHeure from "../components/TabTempHeure";
import Semaine from "../components/Semaine";
import DetailsJour from "../components/DetailsJour";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export default function DetailsScreen({route} : any) {
    //console.log("route : " + route)
    //console.log("params : " + route.params)
    //console.log("ville : " + route.params.weather.city)
    //console.log("date : " + route.params.weather.at)
    //console.log("météo : " + getWeather(route.params.weather.city.name, route.params.weather.at))

    return (
        <View style={styles.container}>
            <DetailsJour weather={getWeather(route.params.weather.city.name, route.params.weather.at)}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5CB8C",
        alignItems: "center",
    }
});