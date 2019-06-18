import { TestBed } from '@angular/core/testing';

import { CatCrudService } from './cat-crud.service';

describe('CatCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatCrudService = TestBed.get(CatCrudService);
    expect(service).toBeTruthy();
  });
});
