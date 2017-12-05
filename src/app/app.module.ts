import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventComponent } from './components/event/event.component';
import { Routes, RouterModule } from '@angular/router';
import { EventsListItemComponent } from './components/events-list-item/events-list-item.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EventsService } from './services/events.service';

//AoT (Ahead-of-Time) requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const appRoutes: Routes = [
  {path: '', component: EventsListComponent},
  { path: 'events/:name', component: EventComponent }
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
    HttpModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [Http]
      }
    })
  ],
  exports: [
    RouterModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
