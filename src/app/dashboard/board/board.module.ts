import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BoardSharedModule } from './components';
const moduleImports = [DragDropModule, FlexLayoutModule, BoardSharedModule];

import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
const materialImports = [MatCardModule, MatExpansionModule];

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';

@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    ...moduleImports,
    ...materialImports,
  ],
})
export class BoardModule {}
