import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanteBucco } from './sante-bucco';

describe('SanteBucco', () => {
  let component: SanteBucco;
  let fixture: ComponentFixture<SanteBucco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanteBucco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanteBucco);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
