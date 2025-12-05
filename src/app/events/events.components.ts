import { Component } from '@angular/core';
import { EventsService } from '../services/events.services';
import { Event } from '../models/event';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-events',
  imports: [CommonModule, FormsModule],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class EventsComponent {
  events: Event[] = [];
  newEvent: Event = {
    id: 0,
    title: '',
    description: '',
    date: '',
    location: ''
  };

  editMode = false;
  constructor(private eventService: EventsService){}

  ngOnInit(){
    this.refreshEvents();
  }

  addEvent() {
    let id: number;
    id = this.eventService.getTotalEvents();
    if (id > 0) {
      const lastEvent = this.events[this.events.length - 1];
      this.newEvent.id = lastEvent.id + 1;
    } else {
      this.newEvent.id = 1;
    }
    this.eventService.addEvent({...this.newEvent});
    this.refreshEvents();
    this.resetForm();
  }

  editEvent(event: Event) {
    this.newEvent = { ...event };
    this.editMode = true;
  }

  updateEvent() {
    this.eventService.updateEvent(this.newEvent.id, { ...this.newEvent });
    this.refreshEvents();
    this.resetForm();
    this.editMode = false;
  }

  deleteEvent(id: number) {
    this.eventService.deleteEvent(id);
    this.refreshEvents();
  }
  refreshEvents() {
    this.events = this.eventService.getEvents();
  }
  resetForm() {
    this.newEvent = {
      id: 0,
      title: '',
      date: '',
      location: '',
      description: ''
    };
  }
}
