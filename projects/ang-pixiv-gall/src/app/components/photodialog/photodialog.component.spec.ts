import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDialogComponent } from './photodialog.component';

describe('PhotoDialogComponent', () => {
  let component: PhotoDialogComponent;
  let fixture: ComponentFixture<PhotoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});