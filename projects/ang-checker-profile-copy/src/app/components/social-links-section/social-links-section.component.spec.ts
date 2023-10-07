import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinksSectionComponent } from './social-links-section.component';

describe('SocialLinksSectionComponent', () => {
  let component: SocialLinksSectionComponent;
  let fixture: ComponentFixture<SocialLinksSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialLinksSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialLinksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
