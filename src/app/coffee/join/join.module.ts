import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinRoutingModule } from './join-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
const moduleImports = [JoinRoutingModule, FlexLayoutModule];

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
const materialImports = [MatButtonModule, MatFormFieldModule, MatInputModule];

import { JoinComponent } from './join.component';

@NgModule({
  declarations: [JoinComponent],
  imports: [CommonModule, ...moduleImports, ...materialImports],
})
export class JoinModule {}
