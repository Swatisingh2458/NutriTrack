import { TestBed } from '@angular/core/testing';

import { NutritionService } from './nutrition.service';

describe('CalorieService', () => {
  let service: NutritionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutritionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
