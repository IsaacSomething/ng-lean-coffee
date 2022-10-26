import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent {
  active = false;
  code = '32fd4';
  copied = false;

  constructor() {}

  copy() {
    this.copied = true;
    timer(1000).subscribe(() => (this.copied = false));
  }

  start() {}

  select() {
    this.active = !this.active;
  }
}
