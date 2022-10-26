import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-add-discussion-point',
  templateUrl: './add-discussion-point.component.html',
  styleUrls: ['./add-discussion-point.component.scss'],
})
export class AddDiscussionPointComponent {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<AddDiscussionPointComponent>
  ) {}
}
