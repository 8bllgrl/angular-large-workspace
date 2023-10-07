import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomEditableTextComponent } from './bottom-editable-text.component';

describe('BottomEditableTextComponent', () => {
  let component: BottomEditableTextComponent;
  let fixture: ComponentFixture<BottomEditableTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomEditableTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomEditableTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
