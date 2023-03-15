import {View, Text, StyleSheet} from "react-native";
import { Weather, WEATHER_DATA } from "./../data/stub";
type InfosProps = {
  time: string;
  value: number;
}

export default function Infos(props: InfosProps) {
  return (
    <View>
      <View style={styles.block}>
        <Text>{props.time}</Text>
        <Text style={styles.valeur}>{props.value} °C</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: '#DFD3C3',
        alignItems: 'center',
        display: "flex",
        margin: 10,
    },
    valeur: {
        backgroundColor: 'grey',
        borderRadius: 12,
        alignItems: "center",
        padding: 5,
    },
});
