import { TestBed } from '@angular/core/testing';

import { RecommendedSchoolsService } from './recommended-schools.service';

describe('RecommendedSchoolsService', () => {
  let service: RecommendedSchoolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecommendedSchoolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
