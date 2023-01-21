import { TestBed } from '@angular/core/testing';

import { CompareSchoolsService } from './compare-schools.service';

describe('CompareSchoolsService', () => {
  let service: CompareSchoolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompareSchoolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
