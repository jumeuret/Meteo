import {Weather} from "./../data/stub";
import Infos from "./Infos";
import {Image, StyleSheet, View} from "react-native";

type InfosJourProps = {
  meteo: {[key: string]: number;};
  periodes: string[];
}

export default function InfosJour(props: InfosJourProps) {
  return (
    <View style={styles.block}>
      <View style={styles.haut_droite}>
        <Infos time={props.periodes[0]} value={props.meteo["maintenant"]}/>
      </View>
      <View style={styles.conteneur}>
          <Image style={styles.image} source={require("../assets/images/soleil.png")}/></View>
      <View style={styles.ligne}>
          <Infos time={props.periodes[1]} value={props.meteo["matin"]} />
          <Infos time={props.periodes[2]} value={props.meteo["apres-midi"]} />
          <Infos time={props.periodes[3]} value={props.meteo["soir"]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: '#DFD3C3',
        borderWidth: 5,
        borderColor: "black",
        borderRadius: 5,
        width: 225,
    },
    ligne: {
        flex: 1,
        flexDirection: "row-reverse",
        justifyContent: "space-evenly",
    },
    haut_droite: {
        alignItems: "flex-end",
    },
    image: {
        width: 150,
        height: 150,
    },
    conteneur: {
        alignItems: "center",
    },
});