import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JliDatepickerComponent } from './jli-datepicker.component';

describe('JliDatepickerComponent', () => {
  let component: JliDatepickerComponent;
  let fixture: ComponentFixture<JliDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JliDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JliDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
