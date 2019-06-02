import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbDatepickerModule, NgbDateParserFormatter, NgbDateAdapter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { JliDatepickerComponent } from 'projects/jli-datepicker/src/public_api';
import { FormsModule } from '@angular/forms';
import { NgbDateFRParserFormatter } from 'projects/jli-datepicker/src/public_api';
import { NgbUTCStringAdapter } from 'projects/jli-datepicker/src/public_api';

import { LOCALE_ID } from '@angular/core';
import { i18nDatepicker } from './i18n/i18n-datepicker';
import { ClickOutSideDirective } from './click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    JliDatepickerComponent,
    ClickOutSideDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbDatepickerModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    {
      provide: NgbDateParserFormatter,
      useClass: NgbDateFRParserFormatter
    },
    {
        provide: NgbDateAdapter,
        useClass: NgbUTCStringAdapter
    },
    {
        provide: NgbDatepickerI18n,
        useClass: i18nDatepicker
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
