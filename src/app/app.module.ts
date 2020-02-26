import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Optimus1Component } from './optimus1/optimus1.component';
import { Optimus2Component } from './optimus2/optimus2.component';
import { Optimus3Component } from './optimus3/optimus3.component';
import { Page2Component } from './page2/page2.component';
import { Optimus4Component } from './optimus4/optimus4.component';


@NgModule({
  declarations: [
    AppComponent,
    Optimus1Component,
    Optimus2Component,
    Optimus3Component,
    Page2Component,
    Optimus4Component
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule ],
  providers: [],
  bootstrap: [Page2Component]
})
export class AppModule { }
