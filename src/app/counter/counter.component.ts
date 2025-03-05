import { Component, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count = signal(0); // Creating a signal for count
  
  // Computed signal that automatically updates when count changes
  doubleCount: Signal<number> = computed(() => this.count() * 2);
  
  increment() {
    this.count.set(this.count() + 1);
  }
  
  decrement() {
    this.count.set(this.count() - 1);
  }
  
  reset() {
    this.count.set(0);
  }

}
