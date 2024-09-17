import { Place } from "./place.model";
import { Project } from "./project.model";
import { Type } from "./type.model";

export interface Event {
    '@id': string;
    '@type': string;
    timeStart: Date;
    timeEnd: Date;
    description: string;
    visual: string;
    background: string;
    types: Type[];
    place: Place;
    projects: Project[];
    photos: string[];
  }
  