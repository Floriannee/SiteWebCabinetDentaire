import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soins } from './soins';

describe('Soins', () => {
  let component: Soins;
  let fixture: ComponentFixture<Soins>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Soins]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Soins);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
