import { TestBed } from '@angular/core/testing';

import { JliDatepickerService } from './jli-datepicker.service';

describe('JliDatepickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JliDatepickerService = TestBed.get(JliDatepickerService);
    expect(service).toBeTruthy();
  });
});
