import { Injectable } from '@angular/core';

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
  constructor() { }

  // return the data for selected event
  getEventData(eventname) {
    for (let i = 0; i < this.events.length; i++) {
      if (eventname === this.events[i].name) {
        return this.events[i];
      }
    }
  }

}
