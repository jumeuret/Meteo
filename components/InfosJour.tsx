import {Weather, WEATHER_DATA, WEATHER_DATA_Lyon_D1} from "./../data/stub";
import Infos from "./Infos";
import {View, FlatList, StyleSheet} from "react-native";

type InfosJourProps = {
  meteo: {[key: string]: number;};
  periodes: string[];
}

export default function InfosJour(props: InfosJourProps) {
  return (
    <View>
      <View style={styles.block}>
          <Infos time={props.periodes[0]} value={props.meteo["maintenant"]} />
          <Infos time={props.periodes[1]} value={props.meteo["matin"]} />
          <Infos time={props.periodes[2]} value={props.meteo["apres-midi"]} />
          <Infos time={props.periodes[3]} value={props.meteo["soir"]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: 'grey',
    },
});