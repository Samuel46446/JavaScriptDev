import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildImg } from './child-img';

describe('ChildImg', () => {
  let component: ChildImg;
  let fixture: ComponentFixture<ChildImg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildImg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildImg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
