import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueRoutingModule } from './issue-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FirstStepsModule } from '@coffee/components/first-steps';
const moduleImports = [IssueRoutingModule, FlexLayoutModule, FirstStepsModule];

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
const materialImports = [MatButtonModule, MatInputModule, MatFormFieldModule];

import { IssueComponent } from './issue.component';

@NgModule({
  declarations: [IssueComponent],
  imports: [CommonModule, ...moduleImports, ...materialImports]
})
export class IssueModule {}
