import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counterlist } from './counterlist';

describe('Counterlist', () => {
  let component: Counterlist;
  let fixture: ComponentFixture<Counterlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counterlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Counterlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
