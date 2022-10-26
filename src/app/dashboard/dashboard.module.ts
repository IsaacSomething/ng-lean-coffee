import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
const moduleImports = [
  DragDropModule,
  DashboardRoutingModule,
  FlexLayoutModule,
];

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
const materialImports = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
];

import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, ...moduleImports, ...materialImports],
})
export class DashboardModule {}
