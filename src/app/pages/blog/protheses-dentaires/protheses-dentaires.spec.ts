import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProthesesDentaires } from './protheses-dentaires';

describe('ProthesesDentaires', () => {
  let component: ProthesesDentaires;
  let fixture: ComponentFixture<ProthesesDentaires>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProthesesDentaires]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProthesesDentaires);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
