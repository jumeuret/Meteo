import React from "react";
import HomeScreen from "../screens/HomeScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import DetailsScreen from "../screens/DetailsScreen";
import {StubbedDataManager} from "../data/Stub/StubbedDataManager";
import CitiesScreen from "../screens/CitiesScreen";

/**
 * Une fonction permettant de définir la navigation, elle contient les routes de l'application
 * @returns Un navigationContainer
 */

type StackNavProps = {
    data: StubbedDataManager;
}
export default function StackNavigation() {
    const Stack = createStackNavigator();
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Details" component={DetailsScreen}/>
                    <Stack.Screen name="Cities" component={CitiesScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
}