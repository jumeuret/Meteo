import {SafeAreaView, StyleSheet} from 'react-native';
import StackNavigation from "./navigation/Navigation"
import {StubbedDataManager} from "./data/Stub/StubbedDataManager";

export default function App() {
  var data = new StubbedDataManager()
  return (  
    <SafeAreaView style={styles.container}>
      <StackNavigation data={data}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5CB8C"
  }
});
