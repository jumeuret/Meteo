import {DELETE_FAVOURITE_CITY} from '../Constants';
import City from "../../modele/City";

export const deleteFavouriteCity = (favouritesCities: City[]) => {
    return {
        type: DELETE_FAVOURITE_CITY,
        payload: favouritesCities,
    };
}