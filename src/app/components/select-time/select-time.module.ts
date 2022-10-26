import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
const materialImports = [MatButtonModule];

import { SelectTimeComponent } from './select-time.component';

@NgModule({
  declarations: [SelectTimeComponent],
  exports: [SelectTimeComponent],
  imports: [CommonModule, ...materialImports],
})
export class SelectTimeModule {}
