import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoinsPedodontie } from './soins-pedodontie';

describe('SoinsPedodontie', () => {
  let component: SoinsPedodontie;
  let fixture: ComponentFixture<SoinsPedodontie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoinsPedodontie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoinsPedodontie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
