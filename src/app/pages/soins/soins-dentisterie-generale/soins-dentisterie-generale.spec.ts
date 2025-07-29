import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoinsDentisterieGenerale } from './soins-dentisterie-generale';

describe('SoinsDentisterieGenerale', () => {
  let component: SoinsDentisterieGenerale;
  let fixture: ComponentFixture<SoinsDentisterieGenerale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoinsDentisterieGenerale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoinsDentisterieGenerale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
