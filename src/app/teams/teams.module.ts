import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
const moduleImports = [TeamsRoutingModule, FlexLayoutModule];

import { MatButtonModule } from '@angular/material/button';
const materialImports = [MatButtonModule];

import { TeamsComponent } from './teams.component';

@NgModule({
  declarations: [TeamsComponent],
  imports: [CommonModule, ...moduleImports, ...materialImports],
})
export class HomeModule {}
