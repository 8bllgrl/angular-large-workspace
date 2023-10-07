import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendVComponent } from './legend-v.component';

describe('LegendVComponent', () => {
  let component: LegendVComponent;
  let fixture: ComponentFixture<LegendVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegendVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
