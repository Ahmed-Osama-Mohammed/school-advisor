import { TestBed } from '@angular/core/testing';

import { SearchSchoolService } from './search-school.service';

describe('SearchSchoolService', () => {
  let service: SearchSchoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchSchoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
