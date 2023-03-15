import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import TabTempHeure from "../components/TabTempHeure";
import Semaine from "../components/Semaine";
import {WEATHER_DATA_Lyon_D1, PERIODES} from "../data/stub"
import InfosJour from "../components/InfosJour";
import {recuperationTemp} from "../components/CarreMillieu";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <InfosJour meteo={recuperationTemp(WEATHER_DATA_Lyon_D1, WEATHER_DATA_Lyon_D1[0].city)} periodes={PERIODES}/>
      <TabTempHeure/>
      <Semaine/>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center"
    }
  });

