import { TestBed } from '@angular/core/testing';

import { RecipeServiceTsService } from './recipe.service';

describe('RecipeServiceTsService', () => {
  let service: RecipeServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
