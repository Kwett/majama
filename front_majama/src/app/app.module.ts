import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { EventsComponent } from './front-office/events/events.component';
import { NavComponent } from './component/nav/nav.component';
import { CardComponent } from './component/card/card.component';
import { FilterComponent } from './component/filter/filter.component';
import { TypeComponent } from './component/filter/type/type.component';
import { CityComponent } from './component/filter/city/city.component';
import { PlaceComponent } from './component/filter/place/place.component';
import { EventPageComponent } from './front-office/event-page/event-page.component';
import { MapsComponent } from './component/maps/maps.component';
import { ImageDialogComponent } from './component/image-dialog/image-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    NavComponent,
    CardComponent,
    FilterComponent,
    TypeComponent,
    CityComponent,
    PlaceComponent,
    EventPageComponent,
    MapsComponent,
    ImageDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatChipsModule,
    FormsModule,
    MatIconModule,
    GoogleMapsModule,
    MatTabsModule,
    MatDividerModule,
    MatDialogModule
      ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
