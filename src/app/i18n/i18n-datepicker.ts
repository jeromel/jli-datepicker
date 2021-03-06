import { Injectable, Inject, LOCALE_ID } from '@angular/core';

import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { I18N_VALUES } from './languages/i18n-values.lang';

@Injectable()
export class i18nDatepicker extends NgbDatepickerI18n {

  constructor(@Inject(LOCALE_ID) private _i18n_lang: string) {
    super();
  }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n_lang].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n_lang].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}