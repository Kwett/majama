import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../service/event/event.service';
import { Event } from '../../model/event.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  events: Event[] = [];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    return this.eventService.events$
    .subscribe({
      next: (events: Event[]) => {
        this.events = events.map((event: any) => {
          const updatedPlace = {
            ...event.place,
            addressNumber: event.place.address_number,
          };
          return {
            ...event,
            place: updatedPlace,
            timeStart: event.time_start,
            timeEnd: event.time_end,
          };
        });
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des événements :', error);
      }
    });
  }
}