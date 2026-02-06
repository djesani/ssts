import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {
  eventsResource = rxResource(() => this.eventsService.getEvents());

  constructor(private eventsService: EventsService) { }
}
