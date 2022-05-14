import { Component, OnInit } from '@angular/core';

import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styles: [
  ]
})
export class EventsListComponent implements OnInit {

  events: any;

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {
    this.eventsService.getAll().subscribe((data: any[]) => {
      this.events = data;
    });
    this.isSideMenuShow();
  }

  isSideMenuShow() {
    if (localStorage.getItem("isSideMenuShow") == 'true') {
      document.getElementById("header-nav").style.marginLeft = "250px";
      document.getElementById("side-nav").style.width = "250px";
      document.getElementById("main-content").style.marginLeft = "250px";
    } 
  }

}
