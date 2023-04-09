import {ADD_CITY_TO_FAVOURITES, DELETE_FAVOURITE_CITY, FETCH_CITIES, FETCH_FAVOURITES_CITIES} from "../Constants";
import City from "../../modele/City";

const INITIAL_STATE = {
    favouriteCities: [
        new City("Paris", 48.866667, 2.333333),
        new City("Lyon", 45.764043, 4.835659),
        new City("Marseille", 43.296482, 5.36978),
        new City("Bruxelles", 50.85034, 4.35171)
    ],
    cities: [
        new City("Clermont-Ferrand", 45.777222, 3.087025),
    ],
};

export const CityReducer = (state = INITIAL_STATE, action : any) => {
    switch (action.type) {
        case ADD_CITY_TO_FAVOURITES:
            // @ts-ignore
            state.favouriteCities.push(action.city)
            return {...state, city: [...state.favouriteCities.filter((item) => item.name != action.city.name)]};
        case FETCH_FAVOURITES_CITIES:
            // @ts-ignore
            return {...state, city: action.payload};
        case FETCH_CITIES:
            // @ts-ignore
            return {...state, city: action.payload};
        case DELETE_FAVOURITE_CITY:
            // @ts-ignore
            return {...state, city: [...state.favouriteCities.filter((item) => item.name != action.payload.name)]}
        default:
            return state;
    }
};