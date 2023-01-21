import { TestBed } from '@angular/core/testing';

import { TopRankedSchoolService } from './top-ranked-school.service';

describe('TopRankedSchoolService', () => {
  let service: TopRankedSchoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopRankedSchoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
