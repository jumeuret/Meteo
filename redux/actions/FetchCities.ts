import {FETCH_CITIES} from '../Constants';
import City from "../../modele/City";

export const setCities = (cities: City[]) => {
    return {
        type: FETCH_CITIES,
        payload: cities,
    };
}