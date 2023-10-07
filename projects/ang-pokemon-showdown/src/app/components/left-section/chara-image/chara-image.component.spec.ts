import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharaImageComponent } from './chara-image.component';

describe('CharaImageComponent', () => {
  let component: CharaImageComponent;
  let fixture: ComponentFixture<CharaImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharaImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharaImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
