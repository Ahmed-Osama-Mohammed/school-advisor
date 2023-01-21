import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBePartnerComponent } from './to-be-partner.component';

describe('ToBePartnerComponent', () => {
  let component: ToBePartnerComponent;
  let fixture: ComponentFixture<ToBePartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToBePartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToBePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
