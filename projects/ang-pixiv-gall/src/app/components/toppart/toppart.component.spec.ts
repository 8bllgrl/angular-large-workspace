import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppartComponent } from './toppart.component';

describe('ToppartComponent', () => {
  let component: ToppartComponent;
  let fixture: ComponentFixture<ToppartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToppartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
