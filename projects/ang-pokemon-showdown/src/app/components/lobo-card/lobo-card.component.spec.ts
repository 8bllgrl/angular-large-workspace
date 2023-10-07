import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoboCardComponent } from './lobo-card.component';

describe('LoboCardComponent', () => {
  let component: LoboCardComponent;
  let fixture: ComponentFixture<LoboCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoboCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoboCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
