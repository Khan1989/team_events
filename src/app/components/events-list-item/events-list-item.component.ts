import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-list-item',
  templateUrl: './events-list-item.component.html',
  styleUrls: ['./events-list-item.component.css']
})
export class EventsListItemComponent implements OnInit {

  @Input() name;
  @Input() description;
    constructor(private router: Router) { }
  
    ngOnInit() {
    }
  
    viewEvent() {
      console.log("showing event");
      this.router.navigate(['event', this.name]);
    }
}
