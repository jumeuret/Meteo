import {Button, StyleSheet, View} from 'react-native';
import TabTempHeure from "../components/TabTempHeure";
import Semaine from "../components/Semaine";
import {PERIODES, tabLyon} from "../data/stub"
import InfosJour from "../components/InfosJour";
import {recuperationTemp} from "../components/CarreMillieu";
import Details from "../components/Details";

export default function HomeScreen({navigation} : any) {
    console.log("VILLE : " + tabLyon[0][0].city.name)
    console.log("DATE : " + tabLyon[0][0].at)
    return (
        <View style={styles.container}>
            <InfosJour meteo={recuperationTemp(tabLyon[0], tabLyon[0][0].city)} periodes={PERIODES}/>
            <TabTempHeure/>
            <Semaine/>
            {/*<DetailsJour weather={WEATHER_DATA_Lyon_D1[0]}/>*/}
            <Button title={"Plus"} onPress={() => navigation.navigate("Details", {weather: tabLyon[0][0]})}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center"
    }
  });

