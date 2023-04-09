import {StyleSheet, View} from "react-native";
import DetailsJour from "../components/DetailsJour";
import {useSelector} from "react-redux";

export default function DetailsScreen({route} : any) {
    //console.log("route : " + route)
    //console.log("params : " + route.params)
    //console.log("ville : " + route.params.weather.city)
    //console.log("date : " + route.params.weather.at)
    //console.log("météo : " + getWeather(route.params.weather.city.name, route.params.weather.at))

    // @ts-ignore
    var weather = useSelector(state => state.weatherReducer.currentWeather);

    return (
        <View style={styles.container}>
            <DetailsJour weather={weather}/>
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