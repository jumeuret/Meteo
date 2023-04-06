import {StyleSheet, View} from "react-native";
import DetailsJour from "../components/DetailsJour";

export default function CitiesScreen({route} : any) {

    return (
        <View style={styles.container}>
            <DetailsJour weather={route.params.weather}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5CB8C",
        alignItems: "center",
    }
});