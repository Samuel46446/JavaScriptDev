import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorInterface } from './doctor.interface';

describe('DoctorInterface', () => {
  let component: DoctorInterface;
  let fixture: ComponentFixture<DoctorInterface>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorInterface]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorInterface);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
