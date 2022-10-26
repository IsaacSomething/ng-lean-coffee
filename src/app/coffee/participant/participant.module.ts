import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantRoutingModule } from './participant-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ParticipantListModule } from './participant-list';
import { AddDiscussionPointModule } from './add-discussion-point';
const moduleImports = [
  ParticipantRoutingModule,
  FlexLayoutModule,
  ParticipantListModule,
  AddDiscussionPointModule,
];

import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatProgressBarModule } from '@angular/material/progress-bar';
const materialImports = [
  MatButtonModule,
  MatProgressSpinnerModule,
  MatBottomSheetModule,
  MatProgressBarModule,
];

import { ParticipantComponent } from './participant.component';

@NgModule({
  declarations: [ParticipantComponent],
  imports: [CommonModule, ...moduleImports, ...materialImports],
})
export class ParticipantModule {}
