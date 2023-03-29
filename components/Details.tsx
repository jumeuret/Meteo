import {Image, ImageSourcePropType, StyleSheet, Text, View} from "react-native";
import {useState} from "react";

type DetailsProps = {
    logo: ImageSourcePropType
    nom: string
    valeur: number | string;
    unite: string;
}

export default function Details(props: DetailsProps) {
    return (
        <View>
            <View style={styles.block}>
                <Image style={styles.image} source={props.logo}/>
                <Text>{props.nom}</Text>
                <Text>{props.valeur}</Text>
                <Text>{props.unite}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: '#DFD3C3',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between",
        display: "flex",
        padding: 10,
        paddingHorizontal: 20,
        borderColor: "black",
    },
    valeur: {
        backgroundColor: 'grey',
        borderRadius: 12,
        alignItems: "center",
        padding: 5,
    },
    image: {
        width: 50,
        height: 50,
    }
});