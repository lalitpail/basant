import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Optimus1Component } from './optimus1/optimus1.component';
import { Optimus2Component } from './optimus2/optimus2.component';
import { Optimus3Component } from './optimus3/optimus3.component';


@NgModule({
  declarations: [
    AppComponent,
    Optimus1Component,
    Optimus2Component,
    Optimus3Component
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
