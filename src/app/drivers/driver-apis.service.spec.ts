import { TestBed } from '@angular/core/testing';

import { DriverApisService } from './driver-apis.service';

describe('DriverApisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriverApisService = TestBed.get(DriverApisService);
    expect(service).toBeTruthy();
  });
});
