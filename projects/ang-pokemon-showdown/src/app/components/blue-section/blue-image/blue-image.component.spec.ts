import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueImageComponent } from './blue-image.component';

describe('BlueImageComponent', () => {
  let component: BlueImageComponent;
  let fixture: ComponentFixture<BlueImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
