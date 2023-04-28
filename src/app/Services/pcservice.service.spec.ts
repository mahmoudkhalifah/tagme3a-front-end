import { TestBed } from '@angular/core/testing';

import { PCServiceService } from './pcservice.service';

describe('PCServiceService', () => {
  let service: PCServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PCServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
