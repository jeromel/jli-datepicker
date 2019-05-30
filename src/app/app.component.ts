import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { JliDatepickerComponent } from 'projects/jli-datepicker/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-jli-datepicker';

  @ViewChild('date') date: JliDatepickerComponent;
  
  public fromDate: NgbDateStruct;
  public toDate: NgbDateStruct;

  public OnDateChange(event): void {
    this.fromDate = event[0]
    this.toDate = event[1];

    console.debug(this.fromDate);
    console.debug(this.toDate);
  }

  public reset(): void {
    this.date.reset();
  }

  public toto(): void {
    this.fromDate = {
      day: 21,
      month: 6,
      year: 1986
    };

    this.toDate = {
      day: 29,
      month: 6,
      year: 1986
    };
  }
}
