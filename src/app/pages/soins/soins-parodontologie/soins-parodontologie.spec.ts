import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoinsParodontologie } from './soins-parodontologie';

describe('SoinsParodontologie', () => {
  let component: SoinsParodontologie;
  let fixture: ComponentFixture<SoinsParodontologie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoinsParodontologie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoinsParodontologie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
