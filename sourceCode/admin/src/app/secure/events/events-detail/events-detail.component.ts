import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventsService } from '../events.service'

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styles: [
  ]
})
export class EventsDetailComponent implements OnInit {

  events: any;
  event: any;
  getId: any;

  constructor(
    private eventsService: EventsService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.eventsService.getAll().subscribe((data: any[]) => {
      this.events = data;
      this.event = this.events.find(e=> e.name = this.getId)
    });
  }

}
