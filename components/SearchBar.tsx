import React, { useState } from "react";
import {View, FlatList, StyleSheet, TextInput, Text} from "react-native";

type Props ={
    ville : string,
    setSelected : (selectionne: string) => void,
}

export const SearchBar = (props : Props) => {
    const handleSearch = (value: string) => {
        props.setSelected(value);
    };
    return (
        <View style = {searchBarStyle.container}>
            <TextInput style = {searchBarStyle.text} onChangeText={props.setSelected} value={props.ville}  placeholder="Recherche"/>
        </View>
    );
}

const searchBarStyle = StyleSheet.create({
    container : {
        display: "flex",
        margin : 10
    },
    text : {
        padding : 5,
        fontSize : 20,
        borderColor: "black",
        borderRadius : 10,
        borderWidth: 3,      
    }   
  });