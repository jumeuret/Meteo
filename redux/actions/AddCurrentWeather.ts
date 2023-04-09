import {ADD_CURRENT_WEATHER} from '../Constants';
import Weather from "../../modele/Weather";

export const addCurrentWeather = (currentWeather: Weather[]) => {
    return {
        type: ADD_CURRENT_WEATHER,
        payload: currentWeather,
    };
}