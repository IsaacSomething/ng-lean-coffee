import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FirstStepsModule } from '@lc/components/first-steps';
const moduleImports = [HomeRoutingModule, FlexLayoutModule, FirstStepsModule];

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
const materialImports = [MatButtonModule, MatInputModule, MatFormFieldModule];

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ...moduleImports, ...materialImports]
})
export class HomeModule {}
