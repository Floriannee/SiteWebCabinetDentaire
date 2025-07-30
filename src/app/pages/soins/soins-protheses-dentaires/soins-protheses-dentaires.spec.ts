import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoinsProthesesDentaires } from './soins-protheses-dentaires';

describe('SoinsProthesesDentaires', () => {
  let component: SoinsProthesesDentaires;
  let fixture: ComponentFixture<SoinsProthesesDentaires>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoinsProthesesDentaires]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoinsProthesesDentaires);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
