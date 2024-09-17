import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { City } from '../../model/city.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private readonly url = "http://http://45.92.108.169:8000/api/cities";
  citySubject = new BehaviorSubject<City[]>([]);
  city$ = this.citySubject.asObservable();

  constructor(private http: HttpClient) { this.fetchCities().subscribe({
    next: (city: any[]) => this.citySubject.next(city),
    error: (error) => console.error('Failed to load cities:', error)
  });
 }

  fetchCities(): Observable<City[]> {
    return this.http.get<{ 'hydra:member': City[] }>(this.url).pipe(
      map(response => response['hydra:member']),
      catchError(error => {
        console.error('Failed to load cities :', error);
        return throwError(() => new Error('Failed to load cities'));
      })
    )
  }
}
