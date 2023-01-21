import { TestBed } from '@angular/core/testing';

import { FeatureSchoolsService } from './feature-schools.service';

describe('FeatureSchoolsService', () => {
  let service: FeatureSchoolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureSchoolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
