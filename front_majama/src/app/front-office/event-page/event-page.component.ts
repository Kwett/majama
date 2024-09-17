import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../service/event/event.service';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../../component/image-dialog/image-dialog.component';
import { Photo } from '../../model/photo';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrl: './event-page.component.css'
})
export class EventPageComponent implements OnInit {
  public eventId: number = 0;
  public event: any = {
    '@id': '',
    '@type': '',
    timeStart: new Date,
    timeEnd: new Date,
    description: '',
    visual: '',
    background: '',
    types: [],
    place: {
      '@id': 0,
      '@type': '',
      name: '',
      addressNumber: '',
      road: '',
      borough: '',
      background: '',
      city: {
        '@id': 0,
        '@type': '',
        name: '',
        boroughs: [],
        photos: []
      }
    },
    projects: [],
    photos: []
  };
  constructor(private route: ActivatedRoute, private eventService: EventService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.eventId = Number(params.get('id'));
      this.loadEvent(this.eventId);
  })
  }

   loadEvent(eventId: number) {
    return this.eventService.getEvent(eventId).subscribe(
      (event: any) => { 
        const updatedPlace = {
          ...event.place,
          addressNumber: event.place['address_number'], 
        };

        this.event = {
          ...event,
          place: updatedPlace,
          timeStart: event.time_start,
          timeEnd: event.time_end,
        };
      },
      error => console.error('Error loading event:', error)
    );
  }

  hasProject(): Boolean {
    return this.event.projects.length > 0;
  }

  openImageDialog(imageSrc: string) {
    this.dialog.open(ImageDialogComponent, {
      data: {
        imageSrc: imageSrc
      }
    });
  }

  getLimitedPhotos(photos: Photo[]): Photo[] {
    return photos.slice(0, 3);
  }

  formatDate(dateString: string) {
    const date  = new Date(dateString);
    const week = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    const year = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    const day = week[date.getDay() - 1];
    const month = year[date.getMonth()];
    const dayN = date.getDate();
    
    const d = `${day} ${dayN} ${month}`;
    return d
  }
}

