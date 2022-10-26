import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
const materialImports = [MatListModule, MatDividerModule, MatIconModule];

import { ParticipantListComponent } from './participant-list.component';

@NgModule({
  declarations: [ParticipantListComponent],
  exports: [ParticipantListComponent],
  imports: [CommonModule, ...materialImports],
})
export class ParticipantListModule {}
