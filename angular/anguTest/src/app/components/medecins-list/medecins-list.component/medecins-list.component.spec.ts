import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinsListComponent } from './medecins-list.component';

describe('MedecinsListComponent', () => {
  let component: MedecinsListComponent;
  let fixture: ComponentFixture<MedecinsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedecinsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedecinsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
