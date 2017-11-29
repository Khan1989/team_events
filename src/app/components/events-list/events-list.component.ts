import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events = [
    {
      "name": "Event One",
      "description": "The first event of the calendar."
    },
    {
      "name": "Event Two",
      "description": "The second event of the year."
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log("check events");
    console.log(this.events);
    console.log(this.events[0].name);
  }

}
