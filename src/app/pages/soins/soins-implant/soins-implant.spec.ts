import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoinsImplant } from './soins-implant';

describe('SoinsImplant', () => {
  let component: SoinsImplant;
  let fixture: ComponentFixture<SoinsImplant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoinsImplant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoinsImplant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
