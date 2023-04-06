import {SafeAreaView, StyleSheet} from 'react-native';
import StackNavigation from "./navigation/StackNavigation"
import {StubbedDataManager} from "./data/Stub/StubbedDataManager";
import BottomNavigation from "./navigation/BottomNavigation";

export default function App() {
  var data = new StubbedDataManager()
  return (  
    <SafeAreaView style={styles.container}>
      <BottomNavigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5CB8C"
  }
});
