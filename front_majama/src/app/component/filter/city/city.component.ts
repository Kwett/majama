import { Component, EventEmitter, Output } from '@angular/core';
import { City } from '../../../model/city.model';
import { Borough } from '../../../model/borough.model';
import { CityService } from '../../../service/city/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent {
  @Output() cityFilterChange = new EventEmitter<string[]>();

  cities: City[] = [];
  selectedCities: string[] = [];
  boroughs: Borough[] = [];


  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.loadCities();
  }

  loadCities() {
    return this.cityService.city$
    .subscribe({
      next: (city: City[]) => {
        console.log('Villes reçues du service :', city);
        this.cities = city;
      },
      error: (error) => {
        console.error('Erreur lors de la recuperation des villes :', error);
      }
    });
  }

  onToggleCity(city: string, isChecked: boolean) {
    if(isChecked) {
      this.selectedCities.push(city);
      console.log('selected city:', this.selectedCities);
    } else {
      this.selectedCities = this.selectedCities.filter(c => c !== city)
    }

    this.cityFilterChange.emit(this.selectedCities);
  }
}
