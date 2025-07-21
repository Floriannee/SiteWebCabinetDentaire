import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentisteEnfant } from './dentiste-enfant';

describe('DentisteEnfant', () => {
  let component: DentisteEnfant;
  let fixture: ComponentFixture<DentisteEnfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DentisteEnfant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentisteEnfant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
