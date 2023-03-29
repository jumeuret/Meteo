import {SafeAreaView, StyleSheet} from 'react-native';
import StackNavigation from "./navigation/Navigation"

export default function App() {
  return (  
    <SafeAreaView style={styles.container}>
      <StackNavigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5CB8C"
  }
});
