import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
@Input() name;
@Input() description;
  constructor() { }

  ngOnInit() {
  }

  toggleEvent(evt) {
    console.log("toggling");
    console.log(evt);
  }

}
