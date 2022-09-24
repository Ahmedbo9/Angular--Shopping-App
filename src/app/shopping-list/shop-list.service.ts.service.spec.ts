import { TestBed } from '@angular/core/testing';

import { ShopListServiceTsService } from './shop-list.service';

describe('ShopListServiceTsService', () => {
  let service: ShopListServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopListServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
