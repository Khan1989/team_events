import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventComponent } from './components/event/event.component';
import { Routes, RouterModule } from '@angular/router';
import { EventsListItemComponent } from './components/events-list-item/events-list-item.component';

const appRoutes: Routes = [
  {path: '', component: EventsListComponent},
  { path: 'event/:name', component: EventComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsListComponent,
    EventComponent,
    EventsListItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
