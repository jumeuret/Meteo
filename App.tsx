import {SafeAreaView, StyleSheet} from 'react-native';
import {StubbedDataManager} from "./data/Stub/StubbedDataManager";
import BottomNavigation from "./navigation/BottomNavigation";
import store from "./redux/Store"
import {Provider} from "react-redux";

export default function App() {
  var data = new StubbedDataManager()
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <BottomNavigation/>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5CB8C"
  }
});
