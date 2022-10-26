import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
const moduleImports = [FlexLayoutModule];

import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
const materialImports = [MatCardModule, MatExpansionModule, MatIconModule];

import { BoardCardComponent } from './board-card';

@NgModule({
  declarations: [BoardCardComponent],
  exports: [BoardCardComponent],
  imports: [CommonModule, ...moduleImports, ...materialImports],
})
export class BoardSharedModule {}
