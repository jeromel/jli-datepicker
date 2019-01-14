import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { JliDatepickerComponent } from 'jli-datepicker';

@NgModule({
  declarations: [
    AppComponent,
    JliDatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
