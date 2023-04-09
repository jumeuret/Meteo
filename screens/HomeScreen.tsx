import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TabTempHeure from "../components/TabTempHeure";
import Semaine from "../components/Semaine";
import {SearchBar} from "../components/SearchBar";


export default function HomeScreen() {

  const [searchVille , setSearchVille] = useState<string>(null);

  const handleSearchVille = (value: string) => {
      setSearchVille(value);
};

  return (
    <View style={stylesHome.container}>

      <Text> "Paris"</Text>
      <SearchBar ville={searchVille ?? "Paris"} setSelected={handleSearchVille}/>
      <TabTempHeure ville="Paris"/>
      <Semaine ville="Paris"/>
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

function useState<T>(arg0: null): [any, any] {
  throw new Error('Function not implemented.');
}

