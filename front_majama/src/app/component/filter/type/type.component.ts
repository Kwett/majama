import { Component, EventEmitter, Output } from '@angular/core';
import { Type } from '../../../model/type.model';
import { TypeService } from '../../../service/type/type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrl: './type.component.css'
})
export class TypeComponent {
  @Output() typeFilterChange = new EventEmitter<string[]>();

  types: Type[] = [];
  selectedTypes: string[] = [];

  constructor(private typeService: TypeService) {}

  ngOnInit() {
    this.loadTypes();
  }

  loadTypes() {
    return this.typeService.types$
      .subscribe({
        next: (types: Type[]) => {
          console.log('Types reçus du service :', types);
          this.types = types;
        },
        error: (error) => {
          console.error('Erreur lors de la recuperation des types :', error);
        }
      });
  }

  onToggleType(type: string, isChecked: boolean) {
    if (isChecked) {
      this.selectedTypes.push(type);
      console.log('selected types:', this.selectedTypes);
    } else {
      this.selectedTypes = this.selectedTypes.filter(t => t !== type);
    }
    this.typeFilterChange.emit(this.selectedTypes);
  }
}
