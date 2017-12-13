import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class EventsService {
  events = [
    {
      id: "1",
      name: "Angular 2 - Intro To Services",
      description: "The first event of the calendar. This will be an overview of Angular 2 Services. with a live demo.",
    },
    {
      id: "2",
      name: "Java Fundamentals",
      description: "The second event of the year."
    },
    {
      id: "3",
      name: "Leadership Skills for the Workplace",
      description: "The third event of the year."
    },
    {
      id: "4",
      name: "Effective Email Communication",
      description: "The fourth event of the year."
    }
  ];
  constructor(private http: Http) { }

  // return the data for selected event
  getEventData(eventname) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get('http://localhost:3000/singleevent/' + eventname)
    .map(this.extractData);
   
  }

  // save new event to database
  storeEvent(events: any[]) {
    let event = events[0];
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/publish', events, {headers: headers});
  }

  // get a list of all events
  getEvents() {
    return this.http.get('http://localhost:3000/events')
    .map(this.extractData);
  }

  

  private extractData(res: Response) {
    return res.json();
  }

}
