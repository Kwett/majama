import { Borough } from "./borough.model";

export interface City {
    '@id': number;
    '@type': string;
    name: string;
    boroughs: Borough[];
}