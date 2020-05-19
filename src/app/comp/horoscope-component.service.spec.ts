import { TestBed } from '@angular/core/testing';

import { HoroscopeComponentService } from './horoscope-component.service';

describe('HoroscopeComponentService', () => {
  let service: HoroscopeComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoroscopeComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
