import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TabTempHeure from "../components/TabTempHeure";
import Semaine from "../components/Semaine";
import {SearchBar} from "../components/SearchBar";


export default function HomeScreen({navigation} : any) {

    const [searchVille , setSearchVille] = useState<string>(null);

    const handleSearchVille = (value: string) => {
        setSearchVille(value);

    var data = new StubbedDataManager()

    console.log("VILLE : " + data.getCurrentWeather("Lyon").city.name)
    console.log("DATE : " + data.getCurrentWeather("Lyon").at)
    console.log("PHASE : " + data.getCurrentWeather("Lyon").moonPhase)
    var meteo = data.getCurrentWeather("Lyon")
    return (
        <View style={stylesHome.container}>
            <Text> "Paris"</Text>
            <SearchBar ville={searchVille ?? "Paris"} setSelected={handleSearchVille}/>
            <TabTempHeure ville="Paris"/>
            <Semaine ville="Paris"/>
            {/*<InfosJour meteo={recuperationTemp(tabLyon[0], tabLyon[0][0].city)} periodes={PERIODES}/>*/}
            <InfosJour meteo={data.recuperationTemp(meteo.city)} periodes={PERIODES}/>
            <TabTempHeure/>
            <Semaine/>
            {/*<Button title={"Plus"} onPress={() => navigation.navigate("Details", {weather: tabLyon[0][0]})}/>*/}
            <Button title={"Plus"} onPress={() => navigation.navigate("Details")}/>

  )
}};

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

function useState<T>(arg0: null): [any, any] {
  throw new Error('Function not implemented.');
}

