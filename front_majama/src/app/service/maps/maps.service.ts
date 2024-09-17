import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { Coordinates } from '../../model/coordinates.model';
import { Place } from '../../model/place.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  url: string = "http://45.92.108.169:8000/api/location";

  constructor(private http: HttpClient) { }

  getEventLocation(place: Place): Observable<Coordinates> {
    const query: string = `${this.url}?query=`+ encodeURIComponent(`${place.name} ${place.addressNumber} ${place.road} ${place.city.name}`);
    return this.http.get<Coordinates>(query).pipe(
      map(response => {
        if (response.status === 'OK' && response.candidates.length > 0) {
          return response;
        } else {
          throw new Error('No results found or API returned an error.');
        }
      }),
    )};
}
