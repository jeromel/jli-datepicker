import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-jli-datepicker';

  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;

  public OnDateChange(event): void {
    this.fromDate = event[0]
    this.toDate = event[1];

    console.debug(this.fromDate);
    console.debug(this.toDate);
  }
}
