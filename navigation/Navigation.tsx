import React from "react";
import HomeScreen from "../screens/HomeScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import DetailsScreen from "../screens/DetailsScreen";
import Weather from "../modele/Weather";
import {StubbedDataManager} from "../data/Stub/StubbedDataManager";

/**
 * Une fonction permettant de définir la navigation, elle contient les routes de l'application
 * @returns Un navigationContainer
 */

type StackNavProps = {
    data: StubbedDataManager;
}
export default function StackNavigation(props : StackNavProps) {
    const Stack = createStackNavigator();
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Details" component={DetailsScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
}