import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Optimus1Component } from './optimus1/optimus1.component';
import { Optimus2Component } from './optimus2/optimus2.component';
import { Optimus3Component } from './optimus3/optimus3.component';
import { Page2Component } from './page2/page2.component';
import { Optimus4Component } from './optimus4/optimus4.component';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page3Component } from './page3/page3.component';
import { Optimus5Component } from './optimus5/optimus5.component';
import { Page4Component } from './page4/page4.component';
import { Optimus6Component } from './optimus6/optimus6.component';

const appRoutes: Routes = [
  { path: 'app-page1', component: Page1Component },
  { path: 'app-page2', component: Page2Component },
  { path: 'app-page3', component: Page3Component },
];



@NgModule({
  declarations: [
    AppComponent,
    Optimus1Component,
    Optimus2Component,
    Optimus3Component,
    Page2Component,
    Optimus4Component,
    Page1Component,
    Page3Component,
    Optimus5Component,
    Page4Component,
    Optimus6Component
  ],
 
  imports: [BrowserModule, FormsModule, ReactiveFormsModule ,
    RouterModule.forRoot(appRoutes)],

  providers: [],
  // bootstrap: [Page2Component]
  bootstrap: [AppComponent]
})
export class AppModule { }
