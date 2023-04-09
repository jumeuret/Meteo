import {
    ADD_CITY_TO_FAVOURITES,
    ADD_CURRENT_WEATHER,
    DELETE_FAVOURITE_CITY,
    FETCH_CITIES, FETCH_CURRENT_WEATHER,
    FETCH_FAVOURITES_CITIES
} from "../Constants";
import City from "../../modele/City";
import Weather from "../../modele/Weather";
import {MoonPhase} from "../../modele/MoonPhase";

const INITIAL_STATE = {
    currentWeather: [
        new Weather("2023-01-22 23:55:59", 10000, "Nuageux",
        "couvert", 2, -4.34,
        82, 5.14, 1032,
        new City("Lyon", 45.764043, 4.835659), MoonPhase.GibbeuseDecroissante,
    )],
};

export const WeatherReducer = (state = INITIAL_STATE, action : any) => {
    switch (action.type) {
        case ADD_CURRENT_WEATHER:
            state.currentWeather.pop()
            // @ts-ignore
            state.currentWeather.push(action.weather)
            return {...state};
        case FETCH_CURRENT_WEATHER:
            // @ts-ignore
            return {...state, currentWeather: action.payload};
        default:
            return state;
    }
};