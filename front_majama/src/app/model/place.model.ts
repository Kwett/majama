import { City } from "./city.model";

export interface Place {
    '@id': number;
    '@type': string;
    name: string;
    addressNumber: string;
    road: string;
    borough: string;
    background: string;
    city: City;
}