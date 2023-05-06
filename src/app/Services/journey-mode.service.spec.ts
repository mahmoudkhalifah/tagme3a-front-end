import { TestBed } from '@angular/core/testing';

import { JourneyModeService } from './journey-mode.service';

describe('JourneyModeService', () => {
  let service: JourneyModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JourneyModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
