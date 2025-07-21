import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoinsCouronne } from './soins-couronne';

describe('SoinsCouronne', () => {
  let component: SoinsCouronne;
  let fixture: ComponentFixture<SoinsCouronne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoinsCouronne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoinsCouronne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
