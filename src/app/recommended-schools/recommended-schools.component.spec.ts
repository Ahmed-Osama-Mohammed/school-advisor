import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedSchoolsComponent } from './recommended-schools.component';

describe('RecommendedSchoolsComponent', () => {
  let component: RecommendedSchoolsComponent;
  let fixture: ComponentFixture<RecommendedSchoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedSchoolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
