import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventsComponent } from "./events/events.components";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [EventsComponent, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CampusEventTracker-Bautista');
}
