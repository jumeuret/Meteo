import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, I'm your app ! ^_^</Text>
      <Text>And I'm really</Text>
      <View style={styles.beauty}>
        <Text>BEAUTIFUL</Text>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  beauty: {
    backgroundColor: '#AAF',
  },
});
