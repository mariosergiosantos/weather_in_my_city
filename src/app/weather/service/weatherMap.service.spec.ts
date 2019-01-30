import { TestBed } from '@angular/core/testing';

import { WeathermapService } from './weatherMap.service';

describe('WeathermapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeathermapService = TestBed.get(WeathermapService);
    expect(service).toBeTruthy();
  });
});
