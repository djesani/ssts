import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CalendarIconsService } from '../calendarIcons.service'

@Component({
  selector: 'app-calendarIcons-detail',
  templateUrl: './calendarIcons-detail.component.html',
  styles: [
  ]
})
export class CalendarIconsDetailComponent implements OnInit {

  calendarIcons: any;
  event: any;
  getId: any;

  constructor(
    private calendarIconsService: CalendarIconsService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.calendarIconsService.getAll().subscribe((data: any[]) => {
      this.calendarIcons = data;
      this.event = this.calendarIcons.find(e=> e.name = this.getId)
    });
  }

}
