  import { Injectable } from '@angular/core';
  import  { Event } from '../models/event';
  @Injectable({
    providedIn: 'root',
  })
  export class EventsService {
    private events: Event[] = [
      {id: 1, title: "Intramurals Opening", description: "Opening for school instramurals",date: "2025-12-09", location: "GYM"},
      {id: 2, title: "COMSCIE Day", description: "Computer Science day",date: "2026-01-11", location: "Auditorium"}
    ]

    getEvents() {
      return [...this.events];
    }

    getTotalEvents() {
      return this.events.length == 0 ? 0 : this.events.length;
    }

    addEvent(event: Event) {
      this.events.push(event);
    }

    updateEvent(id: number, updated: Event) {
      const index = this.events.findIndex(e => e.id === id);
      this.events[index] = updated;
    }

    deleteEvent(id: number) {
      this.events = this.events.filter(e => e.id !== id);
    }
  }
