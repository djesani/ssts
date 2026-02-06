import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.css']
})
export class EventsFormComponent implements OnInit {
  @Input() id?: string;
  isEdit = false;
  eventForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private eventsService: EventsService) {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: [''],
      unpublished: [true]
    });
  }

  ngOnInit() {
    if (this.id) {
      this.isEdit = true;
      this.eventsService.getEvent(this.id).subscribe(events => {
        const event = events.find(e => e.filename === this.id);
        if (event) {
          this.eventForm.patchValue(event);
        }
      });
    }
  }

  onSubmit() {
    if (this.eventForm.valid) {
      this.eventsService.saveEvent(this.eventForm.value);
      this.router.navigate(['/events']);
    }
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
