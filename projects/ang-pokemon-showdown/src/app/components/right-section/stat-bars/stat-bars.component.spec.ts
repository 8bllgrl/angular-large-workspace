import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatBarsComponent } from './stat-bars.component';

describe('StatBarsComponent', () => {
  let component: StatBarsComponent;
  let fixture: ComponentFixture<StatBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatBarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
