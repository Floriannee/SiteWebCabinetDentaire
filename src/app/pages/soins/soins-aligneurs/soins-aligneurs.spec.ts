import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoinsAligneurs } from './soins-aligneurs';

describe('SoinsAligneurs', () => {
  let component: SoinsAligneurs;
  let fixture: ComponentFixture<SoinsAligneurs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoinsAligneurs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoinsAligneurs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
