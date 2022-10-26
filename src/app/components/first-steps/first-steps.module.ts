import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { PushModule } from '@ngrx/component';
const moduleImports = [FlexLayoutModule, PushModule];

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
const materialImports = [MatButtonModule, MatInputModule, MatFormFieldModule];

import { FirstStepsComponent } from './first-steps.component';

@NgModule({
  declarations: [FirstStepsComponent],
  exports: [FirstStepsComponent],
  imports: [CommonModule, ...moduleImports, ...materialImports]
})
export class FirstStepsModule {}
