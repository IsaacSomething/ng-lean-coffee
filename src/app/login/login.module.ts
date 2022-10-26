import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
const moduleImports = [LoginRoutingModule, FlexLayoutModule];

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
const materialImports = [MatButtonModule, MatCardModule];

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ...moduleImports, ...materialImports],
})
export class LoginModule {}
