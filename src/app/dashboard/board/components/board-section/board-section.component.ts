import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-section',
  templateUrl: './board-section.component.html',
  styleUrls: ['./board-section.component.scss'],
})
export class BoardSectionComponent {
  @Input() card: any;
  @Input() empty = false;

  constructor() {}
}
