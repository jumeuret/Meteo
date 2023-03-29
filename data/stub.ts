import * as  stubBruxelles from "./stubBruxelles";
import * as stubLyon from "./stubLyon";
import * as stubParis from "./stubParis";
import * as stubMarseille from "./stubMarseille";
import * as stubClermont from "./stubClermont";
import Weather from "../class/Weather";
import City from "../class/City";

/**
 * Constante qui retourne une matrice contenant les informations de chaque jours de la semains pour la ville de Clermont
 */
export const tabClermont : Weather[][] = [
  stubClermont.WEATHER_DATA_Clermont_D1, 
  stubClermont.WEATHER_DATA_Clermont_D2, 
  stubClermont.WEATHER_DATA_Clermont_D3, 
  stubClermont.WEATHER_DATA_Clermont_D4, 
  stubClermont.WEATHER_DATA_Clermont_D5, 
  stubClermont.WEATHER_DATA_Clermont_D6, 
  stubClermont.WEATHER_DATA_Clermont_D7
];

/**
 * Constante qui retourne une matrice contenant les informations de chaque jours de la semains pour la ville de Lyon
 */
export const tabLyon : Weather[][] = [
  stubLyon.WEATHER_DATA_Lyon_D1, 
  stubLyon.WEATHER_DATA_Lyon_D2, 
  stubLyon.WEATHER_DATA_Lyon_D3, 
  stubLyon.WEATHER_DATA_Lyon_D4, 
  stubLyon.WEATHER_DATA_Lyon_D5, 
  stubLyon.WEATHER_DATA_Lyon_D6, 
  stubLyon.WEATHER_DATA_Lyon_D7
];

/**
 * Constante qui retourne une matrice contenant les informations de chaque jours de la semains pour la ville de Bruxelles
 */
export const tabBruxelles : Weather[][] = [
  stubBruxelles.WEATHER_DATA_Bruxelles_D1, 
  stubBruxelles.WEATHER_DATA_Bruxelles_D2, 
  stubBruxelles.WEATHER_DATA_Bruxelles_D3, 
  stubBruxelles.WEATHER_DATA_Bruxelles_D4, 
  stubBruxelles.WEATHER_DATA_Bruxelles_D5, 
  stubBruxelles.WEATHER_DATA_Bruxelles_D6, 
  stubBruxelles.WEATHER_DATA_Bruxelles_D7
];

/**
 * Constante qui retourne une matrice contenant les informations de chaque jours de la semains pour la ville de Paris
 */
export const tabParis : Weather[][] = [
  stubParis.WEATHER_DATA_Paris_D1, 
  stubParis.WEATHER_DATA_Paris_D2, 
  stubParis.WEATHER_DATA_Paris_D3, 
  stubParis.WEATHER_DATA_Paris_D4, 
  stubParis.WEATHER_DATA_Paris_D5, 
  stubParis.WEATHER_DATA_Paris_D6, 
  stubParis.WEATHER_DATA_Paris_D7
];

/**
 * Constante qui retourne une matrice contenant les informations de chaque jours de la semains pour la ville de Marseille
 */
export const tabMarseille : Weather[][] = [
  stubMarseille.WEATHER_DATA_Marseille_D1, 
  stubMarseille.WEATHER_DATA_Marseille_D2, 
  stubMarseille.WEATHER_DATA_Marseille_D3, 
  stubMarseille.WEATHER_DATA_Marseille_D4, 
  stubMarseille.WEATHER_DATA_Marseille_D5, 
  stubMarseille.WEATHER_DATA_Marseille_D6, 
  stubMarseille.WEATHER_DATA_Marseille_D7
];

export const CITIES_DATA: City[] = [
  new City("Paris", 48.866667, 2.333333),
  new City("Clermont-Ferrand", 45.777222, 3.087025),
  new City("Lyon", 45.764043, 4.835659),
  new City("Marseille", 43.296482, 5.36978),
  new City("Bruxelles", 50.85034, 4.35171),
];

export const FAVORITE_CITY_DATA =
  new City("Clermont-Ferrand", 45.777222, 3.087025);

export const DEFAULT_SELECTED_CITY_DATA: City =
  new City("Paris", 48.866667, 2.333333);

export const WEATHER_DATA: Weather[] = [
  new Weather("2023-01-22 09:55:59", 10000, "Nuageux",
    "couvert", 0.52, -4.34,
    82, 5.14, 1032,
    new City("Paris", 48.866667, 2.333333)
  ),
  new Weather("2023-01-22 09:55:59", 10000, "Nuageux",
    "couvert", 0.52, -4.34,
    82, 5.14, 1032,
    new City("Clermont-Ferrand", 45.777222, 3.087025)
  ),
  new Weather("2023-01-22 09:55:59", 10000, "Nuageux",
    "couvert", 0.52, -4.34,
    82, 5.14, 1032,
    new City("Lyon", 45.764043, 4.835659)
  ),
  new Weather("2023-01-22 09:55:59", 10000, "Nuageux",
    "couvert", 0.52, -4.34,
    82, 5.14, 1032,
    new City("Marseille", 43.296482, 5.36978)
  ),
  new Weather("2023-01-22 09:55:59", 10000, "Nuageux",
    "couvert", 0.52, -4.34,
    82, 5.14, 1032,
    new City("Bruxelles", 50.85034, 4.35171)
  ),
  new Weather("2023-01-22 09:55:59", 10000, "Nuageux",
    "couvert", 0.52, -4.34,
    82, 5.14, 1032,
    new City("Bruxelles", 50.85034, 4.35171)
  ),
  new Weather("2023-01-22 09:55:59", 10000, "Nuageux",
    "couvert", 0.52, -4.34,
    82, 5.14, 1032,
    new City("Bruxelles", 50.85034, 4.35171)
  ),
  new Weather("2023-01-22 09:55:59", 10000, "Nuageux",
    "couvert", 0.52, -4.34,
    82, 5.14, 1032,
    new City("Bruxelles", 50.85034, 4.35171)
  ),
  new Weather("2023-01-22 09:55:59", 10000, "Nuageux",
    "couvert", 0.52, -4.34,
    82, 5.14, 1032,
    new City("Bruxelles", 50.85034, 4.35171)
  ),
  
];

export const getCurrentWeather = (cityName: string) => {
  if (cityName === undefined) return {};
  return WEATHER_DATA.filter(elt => elt.city.name === cityName)[0];
}
