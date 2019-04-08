import { TestBed } from '@angular/core/testing';

import { EditUserService } from './edit-user.service';

describe('EditUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditUserService = TestBed.get(EditUserService);
    expect(service).toBeTruthy();
  });
});
