import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClipboardModule } from '@angular/cdk/clipboard';
const moduleImports = [SetupRoutingModule, FlexLayoutModule, ClipboardModule];

import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
const materialImports = [MatButtonModule, MatRippleModule];

import { SetupComponent } from './setup.component';

@NgModule({
  declarations: [SetupComponent],
  imports: [CommonModule, ...moduleImports, ...materialImports],
})
export class SetupModule {}
