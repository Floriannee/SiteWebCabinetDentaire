import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoinsDentdesagesse } from './soins-dentdesagesse';

describe('SoinsDentdesagesse', () => {
  let component: SoinsDentdesagesse;
  let fixture: ComponentFixture<SoinsDentdesagesse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoinsDentdesagesse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoinsDentdesagesse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
