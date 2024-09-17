import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { Event } from '../../model/event.model'; 

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url = "http://45.92.108.169:8000/api/events";

  private eventSubject = new BehaviorSubject<Event[]>([]);
  events$ = this.eventSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchEvents().subscribe({
      next: (events: any[]) => this.eventSubject.next(events),
      error: (error) => console.error('Failed to load events:', error)
    });
  }

  fetchEvents(): Observable<Event[]> {
    return this.http.get<{ 'hydra:member': Event[] }>(this.url).pipe(
      map(response => response['hydra:member']),
      catchError(error => {
        console.error('Failed to load events:', error);
        return throwError(() => new Error('Failed to load events'));
      })
    );
  }

  getEvent(id: number) {
    const urlId = `${this.url}/${id}`;
    return this.http.get<Event>(urlId).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        console.error('Failed to load event', error);
        return throwError(() => new Error('Failed to load event'));
      })
    );
  }

  parseId(url: string): number {
    const id = url.split('/');
    return Number(id[id.length -1 ]);
  }
}
