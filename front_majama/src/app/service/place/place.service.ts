import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { Place } from '../../model/place.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private readonly url = "http://http://45.92.108.169:8000/api/places";
  placeSubject = new BehaviorSubject<Place[]>([]);
  place$ = this.placeSubject.asObservable();

  constructor(private http: HttpClient) { 
    this.fetchPlaces().subscribe({
      next: (place: any[]) => this.placeSubject.next(place),
      error: (error) => console.error('Failed to load places :', error)
    });
   }

  fetchPlaces(): Observable<Place[]> {
    return this.http.get<{ 'hydra:member': Place[] }>(this.url).pipe(
      map(response => response['hydra:member']),
      catchError(error => {
        console.error('Failed to load places :', error);
        return throwError(() => new Error('Failed to load places'));
      })
    )
  }
}
