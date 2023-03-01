import { StyleSheet, Text, View, FlatList, Button, SafeAreaView } from 'react-native';
import { Weather, WEATHER_DATA } from "./data/stub";
import InfosJour from "./components/InfosJour";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (  
    <SafeAreaView style={styles.container}>
      <HomeScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5CB8C"
  }
});
