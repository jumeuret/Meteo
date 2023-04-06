import {Button, View} from "react-native";
import {StubbedDataManager} from "../data/Stub/StubbedDataManager";


export default function NavBar({navigation}:any) {

    var data = new StubbedDataManager()
    var meteo = data.getCurrentWeather("Lyon")
    return (
        <View>
            <Button title={"Plus"} onPress={() => navigation.navigate("Details", {weather: meteo})}/>
        </View>
    );
}