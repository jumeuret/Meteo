import {FETCH_CURRENT_WEATHER} from '../Constants';
import Weather from "../../modele/Weather";

export const fetchCurrentWeather = (currentWeather: Weather[]) => {
    return {
        type: FETCH_CURRENT_WEATHER,
        payload: currentWeather,
    };
}