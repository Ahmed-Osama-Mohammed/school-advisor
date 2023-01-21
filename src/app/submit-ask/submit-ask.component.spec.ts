import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAskComponent } from './submit-ask.component';

describe('SubmitAskComponent', () => {
  let component: SubmitAskComponent;
  let fixture: ComponentFixture<SubmitAskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitAskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
