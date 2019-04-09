import { TestBed } from '@angular/core/testing';

import { PassingDataService } from './passing-data.service';

describe('PassingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassingDataService = TestBed.get(PassingDataService);
    expect(service).toBeTruthy();
  });
});
