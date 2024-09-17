import { Component, Input } from '@angular/core';
import { Event } from '../../model/event.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() event: any = {
    ['@id']: "",
    '@type': "",
    timeStart: new Date(),
    timeEnd: new Date(),
    description: "",
    visual: "",
    background: "",
    types: [],
    place: {    
      ['@id']: 0,
      '@type': "",
      name: "",
      addressNumber: "",
      road: "",
      borough: "",
      background: "",
      city: {
        ['@id']: 0,
        '@type': "",
        name: "",
        boroughs: []
      }
    },
    projects: [],
    photos: []
  };

  hasProject(): Boolean {
    return this.event.projects.length > 0;
  }
}