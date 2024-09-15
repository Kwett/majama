import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input() filter: string = "";
  @Output() filterChange = new EventEmitter<{ [key: string]: string[] }>();
  
  readonly panelOpenState = signal(false);

  onTypeFilterChange(selectedTypes: string[]) {
    console.log('types selectionnés :', selectedTypes);
    this.filterChange.emit({ [this.filter]: selectedTypes });
  }

  onCityFilterChange(selectedCities: string[]) {
    console.log('villes selectionnés :', selectedCities);
    this.filterChange.emit({ [this.filter]: selectedCities });
  }

  onPlaceFilterChange(selectedPlaces: string[]) {
    console.log('lieux selectionnés :', selectedPlaces);
    this.filterChange.emit({ [this.filter]: selectedPlaces });
  }
}
