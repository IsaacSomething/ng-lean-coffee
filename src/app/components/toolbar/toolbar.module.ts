import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { PushModule } from '@ngrx/component';
const moduleImports = [FlexLayoutModule, RouterModule, PushModule];

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
const materialImports = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatBadgeModule,
];

import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  imports: [CommonModule, ...materialImports, ...moduleImports],
})
export class ToolbarModule {}
