import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredBarsComponent } from './colored-bars.component';

describe('ColoredBarsComponent', () => {
  let component: ColoredBarsComponent;
  let fixture: ComponentFixture<ColoredBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColoredBarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoredBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
