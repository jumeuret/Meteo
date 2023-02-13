import { StyleSheet, Text, View, ScrollView } from 'react-native';
import DayWheather from "../Component/DayWeather"


export default function HomeScreen() {
  return (
    <View style={stylesHome.container}>
      <View style={stylesHome.centered}>
        <Text style={stylesHome.title}></Text>
      </View>
      <Text>truc</Text> 

      {/* <ScrollView horizontal={true}>
      <Text style={{fontSize:22, padding: 10}}>Horizontal ScrollView</Text>  
      </ScrollView>      */}

      {/* <ScrollView>
        
      </ScrollView> */}
    </View>
  )
};

const stylesHome = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5CB8C"
    },
    centered: {
      alignItems: "center"
    },
    title: {
      fontSize: 20
    }
  });

