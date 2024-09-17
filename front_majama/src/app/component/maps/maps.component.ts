import { Component, Input, SimpleChanges, AfterViewInit, OnChanges, ViewChild, HostListener } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Loader } from '@googlemaps/js-api-loader';
import { Coordinates } from '../../model/coordinates.model';
import { MapsService } from '../../service/maps/maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements AfterViewInit, OnChanges {

  @Input() event: any = {
    '@id': '',
    '@type': '',
    timeStart: new Date(),
    timeEnd: new Date(),
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
        boroughs: []
      }
    },
    projects: []
  };



  
  apiLoaded = false;
  map!: google.maps.Map;
  latitude!: number;
  longitude!: number;
  zoom: number = 12;
  loadedZoom: number = 16.5;
  markerPosition!: google.maps.LatLngLiteral;
  mapHeight: string = '400px';
  mapWidth: string = '800px';

  constructor(private mapsService: MapsService) { }

  ngOnInit() {
    this.setMapDimensions();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setMapDimensions();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['event'] && this.event.place && this.apiLoaded) {
      this.loadEventLocation();
    }
  }

  ngAfterViewInit(): void {
    const loader = new Loader({
      apiKey: environment.googleMapsApiKey,
    });

    loader.importLibrary("core").then(() => {
      this.apiLoaded = true;
    });
  }

  loadEventLocation(): void {
    this.mapsService.getEventLocation(this.event.place).subscribe(
      (location: Coordinates) => {
        if (location.candidates && location.candidates.length > 0) {
          const lat = location.candidates[0].geometry.location.lat;
          const lng = location.candidates[0].geometry.location.lng;
          this.latitude = lat;
          this.longitude = lng;
          this.markerPosition = {lat : this.latitude, lng: this.longitude};
          this.zoom = this.loadedZoom; 
        } else {
          console.error('No candidates found in the response');
        }
      },
      (error: any) => {
        console.error('Error retrieving coordinates:', error);
      }
    );
  }

  setMapDimensions() {
    if (window.innerWidth < 480) {
      this.mapWidth = window.innerWidth + 'px';
    } else if(window.innerWidth < 768) {
      this.mapWidth = window.innerWidth * 0.8 + 'px';
    } else if (window.innerWidth < 1080) {
      this.mapWidth = window.innerWidth * 0.5 + 'px';
    } else {
      this.mapWidth = '800px';
    }
  }
}
