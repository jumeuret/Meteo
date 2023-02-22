import { Weather, WEATHER_DATA } from "./../data/stub";
import Infos from "./Infos";
import {View, FlatList, StyleSheet} from "react-native";

type InfosJourProps = {
  item: Weather;
}

export default function InfosJour(props: InfosJourProps) {
  return (
    <View>
      <View style={styles.block}>
        {/*<FlatList data={WEATHER_DATA} renderItem={({item}) =>
        <InfosJour item={item}/>
      }}*/}
      <FlatList data={props.item} renderItem={Infos}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: 'grey',
    },
});