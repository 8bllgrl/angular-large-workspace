import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualColorCardComponent } from './dual-color-card.component';

describe('DualColorCardComponent', () => {
  let component: DualColorCardComponent;
  let fixture: ComponentFixture<DualColorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DualColorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DualColorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
