import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
const moduleImports = [
  AppRoutingModule,
  BrowserAnimationsModule,
  StoreModule.forRoot({}, {}),
];

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ...moduleImports],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
