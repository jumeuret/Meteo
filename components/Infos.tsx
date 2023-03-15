import {View, Text, StyleSheet} from "react-native";

type InfosProps = {
  time: string;
  value: number;
}

export default function Infos(props: InfosProps) {
  return (
    <View>
      <View style={styles.block}>
        <Text>{props.time}</Text>
        <Text style={styles.button}>{props.value}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: 'grey',
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 8,
    },
});
