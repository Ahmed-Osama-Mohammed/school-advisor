import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSchoolsComponent } from './feature-schools.component';

describe('FeatureSchoolsComponent', () => {
  let component: FeatureSchoolsComponent;
  let fixture: ComponentFixture<FeatureSchoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureSchoolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
