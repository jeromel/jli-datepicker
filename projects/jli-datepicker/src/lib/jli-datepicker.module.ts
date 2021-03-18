import { NgModule } from '@angular/core';
import { JliDatepickerComponent } from './components/datepicker/jli-datepicker.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickOutSideDirective } from './directives/click-outside.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [JliDatepickerComponent, ClickOutSideDirective],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  exports: [JliDatepickerComponent],
  providers: []
})
export class JliDatepickerModule { }
