import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlanchimentDentaire } from './blanchiment-dentaire';

describe('BlanchimentDentaire', () => {
  let component: BlanchimentDentaire;
  let fixture: ComponentFixture<BlanchimentDentaire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlanchimentDentaire]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlanchimentDentaire);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
