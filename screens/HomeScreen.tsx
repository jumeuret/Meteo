import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import TabTempHeure from "../components/TabTempHeure";
import Semaine from "../components/Semaine";
import {WEATHER_DATA_Lyon_D1} from "../data/stub"
import InfosJour from "../components/InfosJour";

export default function HomeScreen() {
  return (
    <View style={stylesHome.container}>
        <FlatList
            data={WEATHER_DATA_Lyon_D1}
            renderItem={({item}) => <InfosJour meteo={item} />}
            keyExtractor={item => item.at}
        />
      <TabTempHeure/>
      <Semaine/>
    </View>
  )
};

const stylesHome = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    centered: {
      alignItems: "center"
    },
    title: {
      fontSize: 20
    }
  });

