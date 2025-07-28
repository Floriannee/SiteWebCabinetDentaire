import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaladiesParodontales } from './maladies-parodontales';

describe('MaladiesParodontales', () => {
  let component: MaladiesParodontales;
  let fixture: ComponentFixture<MaladiesParodontales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaladiesParodontales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaladiesParodontales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
