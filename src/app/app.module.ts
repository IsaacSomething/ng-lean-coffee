import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from './components/toolbar';
const moduleImports = [ToolbarModule, AppRoutingModule, BrowserAnimationsModule];

import { PushModule } from '@ngrx/component';
import { modulesConfig } from '@coffee/store';
const ngrxImports = [PushModule, ...modulesConfig];

import { MatToolbarModule } from '@angular/material/toolbar';
const materialImports = [MatToolbarModule];

import { AppComponent } from './app.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ...moduleImports, ...materialImports, ...ngrxImports, StoreRouterConnectingModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
