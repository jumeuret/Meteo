import {StyleSheet, Text, View} from "react-native";

type DetailsProps = {
    logo: string;
    nom: string
    valeur: number;
    unite: string;
}

export default function Details(props: DetailsProps) {
    return (
        <View>
            <View style={styles.block}>
                <Image style={styles.image}>{props.logo}</Image>
                <Text>{props.nom}</Text>
                <Text>{props.valeur} {props.unite}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: '#DFD3C3',
        alignItems: 'center',
        display: "flex",
        margin: 10,
    },
    valeur: {
        backgroundColor: 'grey',
        borderRadius: 12,
        alignItems: "center",
        padding: 5,
    },
});