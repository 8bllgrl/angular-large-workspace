import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationsAndMangaComponent } from './illustrations-and-manga.component';

describe('IllustrationsAndMangaComponent', () => {
  let component: IllustrationsAndMangaComponent;
  let fixture: ComponentFixture<IllustrationsAndMangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllustrationsAndMangaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IllustrationsAndMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
