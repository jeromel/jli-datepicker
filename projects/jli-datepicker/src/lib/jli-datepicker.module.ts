import { NgModule } from '@angular/core';
import { JliDatepickerComponent } from './components/datepicker/jli-datepicker.component';

import {
  NgbDropdownModule,
  NgbModule,
  NgbPopover,
  NgbTabsetModule,
  NgbDatepicker,
  NgbDatepickerModule,
  NgbDatepickerConfig,
  NgbDateParserFormatter,
  NgbDateAdapter
} from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbUTCStringAdapter } from './adapters/ngb-UTC-string-adapter';
import { NgbDateFRParserFormatter } from './adapters/ngb-date-fr-parser-formatter';


@NgModule({
  declarations: [JliDatepickerComponent],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  exports: [JliDatepickerComponent],
  providers: [
    {
      provide: NgbDateParserFormatter,
      useClass: NgbDateFRParserFormatter
    },
    {
        provide: NgbDateAdapter,
        useClass: NgbUTCStringAdapter
    },
  ]
})
export class JliDatepickerModule { }
