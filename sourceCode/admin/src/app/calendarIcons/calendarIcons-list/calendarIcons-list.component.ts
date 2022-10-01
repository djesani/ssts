import { Component, OnInit } from '@angular/core';
import { CalendarIconsService } from '../calendarIcons.service';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-calendarIcons-list',
  templateUrl: './calendarIcons-list.component.html',
  styles: [
  ]
})
export class CalendarIconsListComponent implements OnInit {

  calendarIcons: any;

  LOCAL_PATH = environment.LOCAL_PATH;

  constructor(
    private calendarIconsService: CalendarIconsService
  ) { }

  ngOnInit(): void {
    this.calendarIconsService.getAll().subscribe((data: any[]) => {
      this.calendarIcons = data;
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
