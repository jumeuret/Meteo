import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TabTempHeure from "../components/TabTempHeure";
import Semaine from "../components/Semaine";

export default function HomeScreen() {
  return (
    <View style={stylesHome.container}>
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

