import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from './components/toolbar';
const moduleImports = [
  ToolbarModule,
  AppRoutingModule,
  BrowserAnimationsModule,
];

import { StoreModule } from '@ngrx/store';
import { PushModule } from '@ngrx/component';
import { reducers } from './store';
const ngrxModules = [StoreModule.forRoot(reducers, {}), PushModule];

import { MatToolbarModule } from '@angular/material/toolbar';
const materialImports = [MatToolbarModule];

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ...moduleImports,
    ...materialImports,
    ...ngrxModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
