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
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

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
import { ContactComponent } from './front-office/contact/contact.component';
import { MessageDialogComponent } from './component/message-dialog/message-dialog.component';
import { LoginComponent } from './back-office/login/login.component';
import { LoginDialogComponent } from './component/login-dialog/login-dialog.component';
import { AdminComponent } from './back-office/admin/admin.component';
import { AdminNavComponent } from './component/admin-nav/admin-nav.component';

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
    ImageDialogComponent,
    ContactComponent,
    MessageDialogComponent,
    LoginComponent,
    LoginDialogComponent,
    AdminComponent,
    AdminNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    GoogleMapsModule,
    MatTabsModule,
    MatDividerModule,
    MatDialogModule,
    ReactiveFormsModule,
      ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
