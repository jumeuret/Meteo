import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { Weather, WEATHER_DATA } from "./data/stub";
import InfosJour from "./components/InfosJour";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, I'm your app ! ^_^</Text>
      <Text>And I'm really</Text>
      <View style={styles.beauty}>
        <Text>BEAUTIFUL</Text>
      </View>
      {/*<FlatList data={WEATHER_DATA} renderItem={({item}) =>
        <InfosJour item={item}/>
      }}*/}
      <FlatList data={WEATHER_DATA} renderItem={InfosJour}/>
      <View style={styles.button}>
        <Button title="Plus"/>
      </View>
      <StatusBar style="auto" />
    <SafeAreaView style={styles.container}>
        <TabTempHeure/>
        <Semaine/>
    </SafeAreaView>
      <DayWheather/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b7e6f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  beauty: {
    backgroundColor: '#AAF',
  },
  block: {
    backgroundColor: 'grey',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 8,
  },
});
