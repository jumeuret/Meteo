import {ADD_CITY_TO_FAVOURITES} from '../Constants';
import City from "../../modele/City";

export const addFavouriteCity = (favouritesCities: City[]) => {
    return {
        type: ADD_CITY_TO_FAVOURITES,
        payload: favouritesCities,
    };
}