import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinInterface } from './medecin.interface';

describe('MedecinInterface', () => {
  let component: MedecinInterface;
  let fixture: ComponentFixture<MedecinInterface>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedecinInterface]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedecinInterface);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
