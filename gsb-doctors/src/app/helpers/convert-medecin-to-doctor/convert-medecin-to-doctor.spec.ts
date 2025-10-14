import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertMedecinToDoctor } from './convert-medecin-to-doctor';

describe('ConvertMedecinToDoctor', () => {
  let component: ConvertMedecinToDoctor;
  let fixture: ComponentFixture<ConvertMedecinToDoctor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertMedecinToDoctor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertMedecinToDoctor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
