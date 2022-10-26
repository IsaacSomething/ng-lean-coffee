import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '@coffee/store/store';

@Component({
  selector: 'ls-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  count$!: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(state => state.count);
  }
}
