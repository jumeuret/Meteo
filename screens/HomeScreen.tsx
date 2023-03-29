import {StyleSheet, Text, View, ScrollView, FlatList, Button} from 'react-native';
import TabTempHeure from "../components/TabTempHeure";
import Semaine from "../components/Semaine";
import {WEATHER_DATA_Lyon_D1, PERIODES} from "../data/stub"
import InfosJour from "../components/InfosJour";
import {recuperationTemp} from "../components/CarreMillieu";
import Details from "../components/Details";
import DetailsJour from "../components/DetailsJour";

export default function HomeScreen({navigation} : any) {
    console.log("VILLE : " + WEATHER_DATA_Lyon_D1[0].city.name)
    console.log("DATE : " + WEATHER_DATA_Lyon_D1[0].at)
    return (
        <View style={styles.container}>
            <InfosJour meteo={recuperationTemp(WEATHER_DATA_Lyon_D1, WEATHER_DATA_Lyon_D1[0].city)} periodes={PERIODES}/>
            <TabTempHeure/>
            <Semaine/>
            {/*<DetailsJour weather={WEATHER_DATA_Lyon_D1[0]}/>*/}
            <Button title={"Plus"} onPress={() => navigation.navigate("Details", {weather: WEATHER_DATA_Lyon_D1[0]})}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center"
    }
  });

