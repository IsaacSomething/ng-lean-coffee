import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
const materialImports = [
  MatButtonModule,
  MatSlideToggleModule,
  MatBottomSheetModule,
];

import { AddDiscussionPointComponent } from './add-discussion-point.component';

@NgModule({
  declarations: [AddDiscussionPointComponent],
  exports: [AddDiscussionPointComponent],
  imports: [CommonModule, ...materialImports],
})
export class AddDiscussionPointModule {}
