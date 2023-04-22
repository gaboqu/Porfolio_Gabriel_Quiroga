import { TestBed } from '@angular/core/testing';

import { UatenticaciónService } from './uatenticación.service';

describe('UatenticaciónService', () => {
  let service: UatenticaciónService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UatenticaciónService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
