import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedSectionComponent } from './red-section.component';

describe('RedSectionComponent', () => {
  let component: RedSectionComponent;
  let fixture: ComponentFixture<RedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
