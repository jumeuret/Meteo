import {FETCH_FAVOURITES_CITIES} from '../Constants';
import City from "../../modele/City";

export const setFavouriteCities = (favouritesCities: City[]) => {
    return {
        type: FETCH_FAVOURITES_CITIES,
        payload: favouritesCities,
    };
}