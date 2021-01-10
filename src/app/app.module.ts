import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms"
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ AgGridModule.withComponents([]),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
