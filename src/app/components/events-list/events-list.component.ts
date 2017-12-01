import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
  providers: [EventsService]
})
export class EventsListComponent implements OnInit {
  events: {name: string, description: string}[] = [];

  constructor(private _eventsService: EventsService) { }

  ngOnInit() {
    //get the list of events
    this.events = this._eventsService.events;
  }

}
