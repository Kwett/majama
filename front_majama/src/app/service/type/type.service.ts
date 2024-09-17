
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { Type } from '../../model/type.model';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private readonly url = "http://45.92.108.169:8000/api/types";
  typeSubject = new BehaviorSubject<Type[]>([]);
  types$ = this.typeSubject.asObservable();

  constructor(private http: HttpClient) { 
    this.fetchTypes().subscribe({
      next: (type: any[]) => this.typeSubject.next(type),
      error: (error) => console.error('Failed to load types:', error)
    });
  }

  fetchTypes(): Observable<Type[]> {
    return this.http.get<{ 'hydra:member': Type[] }>(this.url).pipe(
      map(response => response['hydra:member']),
      catchError(error => {
        console.error('Failed to load types :', error);
        return throwError(() => new Error('Failed to load types'));
      })
    )
  }
}
