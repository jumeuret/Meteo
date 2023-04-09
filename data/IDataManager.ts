import Weather from "../modele/Weather";
import City from "../modele/City";

export interface IDataManager{

    getCurrentWeather(cityName: string) : Weather;

    recuperationTemp(ville:City) : {[key: string]: number;};
}