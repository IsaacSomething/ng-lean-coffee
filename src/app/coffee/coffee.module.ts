import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeeRoutingModule } from './coffee-routing.module';
import { SelectTimeModule } from '../components/select-time';
const moduleImports = [CoffeeRoutingModule, SelectTimeModule];

import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
const materialImports = [MatStepperModule, MatButtonModule];

import { CoffeeComponent } from './coffee.component';

@NgModule({
  declarations: [CoffeeComponent],
  imports: [CommonModule, ...moduleImports, ...materialImports],
})
export class CoffeeModule {}
