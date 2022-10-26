import { Component } from '@angular/core';
import { decrement, increment, multiple, AppState } from '@coffee/store/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-first-steps',
  templateUrl: './first-steps.component.html',
  styleUrls: ['./first-steps.component.scss']
})
export class FirstStepsComponent {
  count$ = this.store.select(state => state.count);
  countIsZero$ = this.store.select(state => state.count === 0);

  constructor(private store: Store<AppState>) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  multiply(factor: string) {
    this.store.dispatch(multiple({ factor: parseFloat(factor) }));
  }
}
