import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentsDeSagesse } from './dents-de-sagesse';

describe('DentsDeSagesse', () => {
  let component: DentsDeSagesse;
  let fixture: ComponentFixture<DentsDeSagesse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DentsDeSagesse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentsDeSagesse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
