import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import DetailsScreen from "../screens/DetailsScreen";
import CitiesScreen from "../screens/CitiesScreen";
import React from "react";
import DetailsNavigation from "../navigation/DetailsNavigation";

export default function BottomNavigation({navigation}: any) {
    const BottomTabNavigator = createBottomTabNavigator()
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
                <BottomTabNavigator.Screen name="Cities" component={CitiesScreen} options={{title: 'Villes', headerShown: false}}/>
                <BottomTabNavigator.Screen name="Home" component={HomeScreen} options={{title: 'Home', headerShown: false}}/>
                {/*<BottomTabNavigator.Screen name="Details" component={DetailsNavigation} options={{title: 'Details', headerShown: false}} />*/}
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}