import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: {name: string, description: string}[] = [];
  createEvent = false;

  constructor(private _eventsService: EventsService) { }

  ngOnInit() {
    //get the list of events -> old service
    //this.events = this._eventsService.events;

    // get the events list from the database
    this._eventsService.getEvents().subscribe(
      (events) => {
        this.events = events;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newEvent() {
    this.createEvent = true;
  }

  cancelEventCreation() {
    this.createEvent = false;
  }

  saveNewEvent() {
    console.log("saving the new event");
    let eventData = [
      {
      "id": "10",
      "name": "Added Event 3",
      "description": "third event."
      }
    ]
    this._eventsService.storeEvent(eventData).subscribe(
      response =>  {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    );
  }

}
