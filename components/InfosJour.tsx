import {Weather, WEATHER_DATA, WEATHER_DATA_Lyon_D1} from "./../data/stub";
import Infos from "./Infos";
import {View, FlatList, StyleSheet} from "react-native";

type InfosJourProps = {
  meteo: Weather;
}

export default function InfosJour(props: InfosJourProps) {
  return (
    <View>
      <View style={styles.block}>
          <Infos time={props.meteo.at} value={props.meteo.temperature} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: 'grey',
    },
});