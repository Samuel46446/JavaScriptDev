import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter';
import { Counterlist } from './counterlist/counterlist';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, Counterlist, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('anguTest');
}
