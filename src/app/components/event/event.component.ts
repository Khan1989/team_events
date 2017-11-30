import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit, OnDestroy {
  event: {name: string};
  paramSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.event = {
      name: this.route.snapshot.params['name']
    };
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.event.name = params['name'];
      }
    );
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

}
