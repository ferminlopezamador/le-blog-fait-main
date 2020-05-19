import { TestBed } from '@angular/core/testing';

import { DateComponentService } from './date-component.service';

describe('DateComponentService', () => {
  let service: DateComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
