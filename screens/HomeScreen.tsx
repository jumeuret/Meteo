import {Button, StyleSheet, View} from 'react-native';
import TabTempHeure from "../components/TabTempHeure";
import Semaine from "../components/Semaine";
import {PERIODES, tabLyon} from "../data/Stub/stub"
import InfosJour from "../components/InfosJour";
//import {recuperationTemp} from "../components/CarreMillieu";
import Details from "../components/Details";
import {StubbedDataManager} from "../data/Stub/StubbedDataManager";

export default function HomeScreen({navigation} : any) {
    var data = new StubbedDataManager()

    console.log("VILLE : " + data.getCurrentWeather("Lyon").city.name)
    console.log("DATE : " + data.getCurrentWeather("Lyon").at)
    console.log("PHASE : " + data.getCurrentWeather("Lyon").moonPhase)
    var meteo = data.getCurrentWeather("Lyon")
    return (
        <View style={styles.container}>
            {/*<InfosJour meteo={recuperationTemp(tabLyon[0], tabLyon[0][0].city)} periodes={PERIODES}/>*/}
            <InfosJour meteo={data.recuperationTemp(meteo.city)} periodes={PERIODES}/>
            <TabTempHeure/>
            <Semaine/>
            {/*<Button title={"Plus"} onPress={() => navigation.navigate("Details", {weather: tabLyon[0][0]})}/>*/}
            <Button title={"Plus"} onPress={() => navigation.navigate("Details")}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center"
    }
  });

