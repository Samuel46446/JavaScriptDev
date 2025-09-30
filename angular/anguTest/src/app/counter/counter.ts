import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter', // Balise HTML pour utiliser le composant  
  standalone: true,  // Sans NgModule  
  templateUrl: './counter.html',  
  styleUrls: ['./counter.css']
})
export class CounterComponent {
  count = signal(0); // Signal pour stocker l’état  
  
  increment(): void {
    this.count.update(c => c + 1);  
  }
}