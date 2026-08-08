import { Component, OnInit } from '@angular/core';

import { CalendarIconsService } from '../calendarIcons.service';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-calendarIcons-list',
  standalone: false,
  templateUrl: './calendarIcons-list.component.html'
})
export class CalendarIconsListComponent implements OnInit {

  calendarIcons: any;
  query: any;

  LOCAL_PATH = environment.LOCAL_PATH;

  constructor(
    private calendarIconsService: CalendarIconsService
  ) { }

  ngOnInit(): void {
    this.calendarIconsService.getAll().subscribe((data: any[]) => {
      this.calendarIcons = data;
    });
  }

}
