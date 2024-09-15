import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './front-office/events/events.component';
import { EventPageComponent } from './front-office/event-page/event-page.component';

const routes: Routes = [
  {path: "", component: EventsComponent},
  {path: "events/:id", component: EventPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
