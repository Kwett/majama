export interface Location {
    lat: number;
    lng: number;
}

export interface Geometry {
    location: Location;
}

export interface Candidate {
    geometry: Geometry;
}

export interface Coordinates {
    status: string;
    candidates: Candidate[];
}