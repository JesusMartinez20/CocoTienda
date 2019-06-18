import { TestBed } from '@angular/core/testing';

import { AddProductService } from './add-product.service';

describe('AddProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddProductService = TestBed.get(AddProductService);
    expect(service).toBeTruthy();
  });
});
