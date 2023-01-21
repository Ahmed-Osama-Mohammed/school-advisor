import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareSchoolsComponent } from './compare-schools.component';

describe('CompareSchoolsComponent', () => {
  let component: CompareSchoolsComponent;
  let fixture: ComponentFixture<CompareSchoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareSchoolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
