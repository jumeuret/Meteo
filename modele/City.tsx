/**
 * Classe qui permet de construire une ville 
 */
export default class City {
  private _name: string;
  private _latitude: number;
  private _longitude: number;

  constructor(name: string, latitude: number, longitude: number) {
    this._name = name;
    this._latitude = latitude;
    this._longitude = longitude;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get latitude(): number {
    return this._latitude;
  }

  set latitude(value: number) {
    this._latitude = value;
  }

  get longitude(): number {
    return this._longitude;
  }

  set longitude(value: number) {
    this._longitude = value;
  }
}
