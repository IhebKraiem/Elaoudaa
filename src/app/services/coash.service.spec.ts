import { TestBed } from '@angular/core/testing';

import { CoashService } from './coash.service';

describe('CoashService', () => {
  let service: CoashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
