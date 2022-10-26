import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, multiple, State } from '@lc/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  count$ = this.store.select(state => state.count);
  countIsZero$ = this.store.select(state => state.count === 0);

  constructor(private store: Store<State>) {
    this.count$ = this.store.select(state => state.count);
  }

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
