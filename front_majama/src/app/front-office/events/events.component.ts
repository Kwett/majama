import { Component, OnInit } from '@angular/core';
import { EventService } from '../../service/event/event.service';
import { Event } from '../../model/event.model';
import { EventFilters } from '../../model/event-filters.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[] = [];
  filters: string[] = ['Type', 'Ville', 'Lieu'];
  filteredEvents: Event[] = [];
  selectedFilters: { [key: string]: string[] } = {};

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

          this.applyFilters();
        },
        error: (error) => {
          console.error('Erreur lors de la récupération des événements :', error);
        }
      });
    }

    onFilterChange(updatedFilter: { [key: string]: string[] }) {
      this.selectedFilters = { ...this.selectedFilters, ...updatedFilter };
      this.applyFilters();
    }
  
    applyFilters() {
      const noFiltersApplied = Object.values(this.selectedFilters).every(filterArray => filterArray.length === 0);
    
      if (noFiltersApplied) {
        const now = new Date();
        this.filteredEvents = this.events.filter(event => new Date(event.timeStart) > now);
      } else {
        this.filteredEvents = this.events.filter(event => {
          const typeFilter = !this.selectedFilters['Type']?.length || this.selectedFilters['Type'].some(type => event.types.map(t => t.name).includes(type));
          const cityFilter = !this.selectedFilters['Ville']?.length || this.selectedFilters['Ville'].includes(event.place.city.name);
          const placeFilter = !this.selectedFilters['Lieu']?.length || this.selectedFilters['Lieu'].includes(event.place.name);

          return typeFilter && cityFilter && placeFilter;
        });
      }
    }

    navigateTo(url: string) {
      const id = this.eventService.parseId(url);
      this.router.navigate(['/events', id]);
    }
}
