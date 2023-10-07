import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsBoxComponent } from './contents-box.component';

describe('ContentsBoxComponent', () => {
  let component: ContentsBoxComponent;
  let fixture: ComponentFixture<ContentsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentsBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
