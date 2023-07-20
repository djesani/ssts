import { Component, OnInit } from "@angular/core";

import { EventsService } from "../events.service";

@Component({
  selector: "app-events-list",
  templateUrl: "./events-list.component.html",
})
export class EventsListComponent implements OnInit {
  events: any;
  query: any;

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getAll().subscribe((data: any[]) => {
      this.events = data;
    });
  }
}
