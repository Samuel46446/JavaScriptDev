import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentImg } from './parent-img';

describe('ParentImg', () => {
  let component: ParentImg;
  let fixture: ComponentFixture<ParentImg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentImg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentImg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
