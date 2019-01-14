import {Component, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
import { NgbDateStruct, NgbInputDatepicker, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { NgModel } from '@angular/forms';

const now = new Date();
const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;

@Component({
  selector: 'lib-jli-datepicker',
  templateUrl: './jli-datepicker.component.html',
  styles: [`
    .custom-day {
      text-align: center;
      padding: 0.185rem 0.25rem;
      display: inline-block;
      height: 2rem;
      width: 2rem;
    }
    .custom-day.focused {
      background-color: #e6e6e6;
    }
    .custom-day.range, .custom-day:hover {
      background-color: rgb(2, 117, 216);
      color: white;
    }
    .custom-day.faded {
      background-color: rgba(2, 117, 216, 0.5);
    }
  `]
})
export class JliDatepickerComponent implements OnInit{
  startDate: NgbDateStruct;
    maxDate: NgbDateStruct;
    minDate: NgbDateStruct;
    hoveredDate: NgbDateStruct;
    fromDate: any;
    toDate: any;
    model: any;
    private _subscription: Subscription;
    private _selectSubscription: Subscription;
    @ViewChild("d") input: NgbInputDatepicker;
    @ViewChild(NgModel) datePick: NgModel;
    @ViewChild('myRangeInput') myRangeInput: ElementRef;

    isHovered = date => 
    this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate)
    isInside = date => after(date, this.fromDate) && before(date, this.toDate);
    isFrom = date => equals(date, this.fromDate);
    isTo = date => equals(date, this.toDate);
    constructor(element: ElementRef, private renderer: Renderer2, private _parserFormatter: NgbDateParserFormatter) {
        
    }
    ngOnInit() {
        this.startDate = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
        this.maxDate = { year: now.getFullYear() + 1, month: now.getMonth() + 1, day: now.getDate()};
        this.minDate = {year: now.getFullYear() - 1, month: now.getMonth() + 1, day: now.getDate()};
    }

    onDateSelection(date: NgbDateStruct) {
        let parsed = '';
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
            
            this.input.close();
        } else {
            this.toDate = null;
            this.fromDate = date;
        }
        if(this.fromDate) {
          parsed += this._parserFormatter.format(this.fromDate);
        }
        if(this.toDate) {
          parsed += ' - ' + this._parserFormatter.format(this.toDate);
        }
       
        this.renderer.setProperty(this.myRangeInput.nativeElement, 'value', parsed);
    }
}
