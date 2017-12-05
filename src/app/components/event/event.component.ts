import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers: [EventsService]
})
export class EventComponent implements OnInit, OnDestroy {
  event: {name: string};
  paramSubscription: Subscription;
  eventDescription = '';

  constructor(private route: ActivatedRoute, private _eventsService: EventsService) { }

  ngOnInit() {
    this.event = {
      name: this.route.snapshot.params['name']
    };
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.event.name = params['name'];
      }
    );
    if (this.event.name) {
      // get the event specific data
      this._eventsService.getEventData(this.event.name).subscribe(
        res => {
          // set description text
          this.eventDescription = res.description;
        },
        error =>  {
          console.log(error);
        }
      );
    }

  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

}
