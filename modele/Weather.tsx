import City from "./City";
import {MoonPhase} from "./MoonPhase";

/**
 * Classe qui permet, pour une ville, de construire sa météo
 */
export default class Weather {
  private _at: string;
  private _visibility: number;
  private _weatherType: string;
  private _weatherDescription: string;
  private _temperature: number;
  private _temperatureFeelsLike: number;
  private _humidity: number;
  private _windSpeed: number;
  private _pressure: number;
  private _city: City;
  private _moonPhase: MoonPhase;

  constructor(at: string, visibility: number, weatherType: string, weatherDescription: string, temperature: number, temperatureFeelsLike: number, humidity: number, windSpeed: number, pressure: number, city: City, moonPhase: MoonPhase) {
    this._at = at;
    this._visibility = visibility;
    this._weatherType = weatherType;
    this._weatherDescription = weatherDescription;
    this._temperature = temperature;
    this._temperatureFeelsLike = temperatureFeelsLike;
    this._humidity = humidity;
    this._windSpeed = windSpeed;
    this._pressure = pressure;
    this._city = city;
    this._moonPhase = moonPhase;
  }

  get at(): string {
    return this._at;
  }

  set at(value: string) {
    this._at = value;
  }

  get visibility(): number {
    return this._visibility;
  }

  set visibility(value: number) {
    this._visibility = value;
  }

  get weatherType(): string {
    return this._weatherType;
  }

  set weatherType(value: string) {
    this._weatherType = value;
  }

  get weatherDescription(): string {
    return this._weatherDescription;
  }

  set weatherDescription(value: string) {
    this._weatherDescription = value;
  }

  get temperature(): number {
    return this._temperature;
  }

  set temperature(value: number) {
    this._temperature = value;
  }

  get temperatureFeelsLike(): number {
    return this._temperatureFeelsLike;
  }

  set temperatureFeelsLike(value: number) {
    this._temperatureFeelsLike = value;
  }

  get humidity(): number {
    return this._humidity;
  }

  set humidity(value: number) {
    this._humidity = value;
  }

  get windSpeed(): number {
    return this._windSpeed;
  }

  set windSpeed(value: number) {
    this._windSpeed = value;
  }

  get pressure(): number {
    return this._pressure;
  }

  set pressure(value: number) {
    this._pressure = value;
  }

  get city(): City {
    return this._city;
  }

  set city(value: City) {
    this._city = value;
  }

  get moonPhase(): MoonPhase {
    return this._moonPhase;
  }

  set moonPhase(value: MoonPhase) {
    this._moonPhase = value;
  }
}