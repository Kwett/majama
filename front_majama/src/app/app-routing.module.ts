import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './front-office/events/events.component';
import { ContactComponent } from './front-office/contact/contact.component';
import { EventPageComponent } from './front-office/event-page/event-page.component';
import { LoginComponent } from './back-office/login/login.component';
import { AdminComponent } from './back-office/admin/admin.component';

const routes: Routes = [
  {path: "", component: EventsComponent},
  {path: "contact", component: ContactComponent},
  {path: "events/:id", component: EventPageComponent},
  {path: "login", component: LoginComponent},
  {path: "admin", component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
