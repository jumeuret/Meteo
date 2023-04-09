import React from "react";
import HomeScreen from "../screens/HomeScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import DetailsScreen from "../screens/DetailsScreen";
import {StubbedDataManager} from "../data/Stub/StubbedDataManager";
import CitiesScreen from "../screens/CitiesScreen";

export default function DetailsNavigation({navigation}: any) {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Details" component={DetailsScreen} options={{title: 'Details', headerShown: false}}  />
        </Stack.Navigator>
    )
}