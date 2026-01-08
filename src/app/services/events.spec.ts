import { TestBed } from '@angular/core/testing';
import { Event } from '../models/event';

import { EventsService } from './events.services';
describe('EventsService', () => {
  let service: EventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all events', () => {
    const events = service.getEvents();

    expect(events.length).toBe(2);
    expect(events[0].title).toBe('Intramurals Opening');
  });

  it('should return total numbers of event', () => {
    expect(service.getTotalEvents()).toBe(2);
  });

  it('should create new event', () => {
    const newEvent: Event = {
      id: 3,
      title: 'New event',
      description: 'New event added from unit test.',
      date: '2026-01-07',
      location: 'event location'
    };
    
      service.addEvent(newEvent);
      const events = service.getEvents();
      expect(events.length).toBe(3);
      expect(events[2].title).toBe('New event');
  });

  it('should update existing event', () => {
    const updatedEvent: Event = {
      id: 1,
      title: 'Updated event',
      description: 'updated desc',
      date: '2026-01-08',
      location: 'updated location'
    };

    service.updateEvent(1, updatedEvent);
    const events = service.getEvents();
    expect(events[0].title).toBe('Updated event');

  });

  it('should delete existing event', () => {
    service.deleteEvent(1)
    const events = service.getEvents();
    
    expect(events.length).toBe(1);
    expect(events[0].title).toBe('COMSCIE Day');
  });
});
