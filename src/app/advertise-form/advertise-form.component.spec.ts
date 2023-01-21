import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseFormComponent } from './advertise-form.component';

describe('AdvertiseFormComponent', () => {
  let component: AdvertiseFormComponent;
  let fixture: ComponentFixture<AdvertiseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertiseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
