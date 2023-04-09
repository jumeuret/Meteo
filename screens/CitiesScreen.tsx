import {StyleSheet, View} from "react-native";
import DetailsJour from "../components/DetailsJour";
import {useSelector} from "react-redux";
import Cities from "../components/Cities";

export default function CitiesScreen({route, navigation} : any) {

    // @ts-ignore
    var favouriteCities = useSelector(state => state.cityReducer.favouriteCities);
    // @ts-ignore
    var cities = useSelector(state => state.cityReducer.cities);

    return (
        <View style={styles.container}>
            <Cities cities={cities} favouriteCities={favouriteCities}/>
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