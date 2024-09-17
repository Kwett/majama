import { Component, EventEmitter, Output } from '@angular/core';
import { Place } from '../../../model/place.model';
import { PlaceService } from '../../../service/place/place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrl: './place.component.css'
})
export class PlaceComponent {
  @Output() placeFilterChange = new EventEmitter<string[]>();

  places: Place[] = [];
  selectedPlaces: string[] = [];


  constructor(private placeService: PlaceService) {}

  ngOnInit() {
    this.loadPlaces();
  }

  loadPlaces() {
    return this.placeService.place$
    .subscribe({
      next: (place: Place[]) => {
        this.places = place;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des lieux :', error);
      }
    });
  }

  onTogglePlace(place: string, isChecked: boolean) {
      if (isChecked) {
        this.selectedPlaces.push(place);
      } else {
        this.selectedPlaces = this.selectedPlaces.filter(p => p !== place);
      }
      this.placeFilterChange.emit(this.selectedPlaces);
  }
}
