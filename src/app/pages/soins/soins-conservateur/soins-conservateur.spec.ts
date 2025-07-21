import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoinsConservateur } from './soins-conservateur';

describe('SoinsConservateur', () => {
  let component: SoinsConservateur;
  let fixture: ComponentFixture<SoinsConservateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoinsConservateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoinsConservateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
