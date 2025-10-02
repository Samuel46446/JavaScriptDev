// counter-list.component.ts
import { Component, signal } from "@angular/core";

@Component({
  selector: "app-counterlist",
  standalone: true,
  templateUrl: "./counterlist.html",
})
export class Counterlist {
  count = signal(0);
  items = signal([
    { id: 1, name: "Angular" },
    { id: 2, name: "Signals" },
  ]);
  
  increment() {
    this.count.update((c) => c + 1);
  }
}