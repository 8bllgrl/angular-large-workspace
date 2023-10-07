import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallgallComponent } from './gallgall.component';

describe('GallgallComponent', () => {
  let component: GallgallComponent;
  let fixture: ComponentFixture<GallgallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallgallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallgallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
