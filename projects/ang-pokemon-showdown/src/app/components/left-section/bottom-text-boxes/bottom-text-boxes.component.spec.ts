import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomTextBoxesComponent } from './bottom-text-boxes.component';

describe('BottomTextBoxesComponent', () => {
  let component: BottomTextBoxesComponent;
  let fixture: ComponentFixture<BottomTextBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomTextBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomTextBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
