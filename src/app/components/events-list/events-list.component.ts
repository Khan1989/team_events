import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Response } from '@angular/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: {name: string, description: string}[] = [];
  createEvent = false;
  eventAddForm: FormGroup;

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

    this.eventAddForm = new FormGroup({
      'eventData': new FormGroup({
        'event-name': new FormControl(null, Validators.required),
        'event-description': new FormControl(null, Validators.required)
      })
    });
  }

  

  newEvent() {
    this.createEvent = true;
  }

  cancelEventCreation() {
    this.createEvent = false;
  }

  saveNewEvent() {
    let eventName = this.eventAddForm.value.eventData['event-name'];
    let eventDescription = this.eventAddForm.value.eventData['event-description'];
    let eventId = "2";
    let eventData = [
      {
      "id": eventId,
      "name": eventName,
      "description": eventDescription
      }
    ]

    this._eventsService.storeEvent(eventData).subscribe(
      response =>  {
        console.log(response);
        let theEvents = JSON.parse(response["_body"]);
        this.events = theEvents;
        this.createEvent = false;
      },
      error => {
        console.log(error);
      }
    );
  }

}
