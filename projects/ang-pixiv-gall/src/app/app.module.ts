import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { IllustrationComponent } from './components/illustration/illustration.component';
import { IllustrationsAndMangaComponent } from './components/illustrations-and-manga/illustrations-and-manga.component';
import { GallgallComponent } from './components/gallgall/gallgall.component';
// import { FeaturedCaroComponent } from './components/featured-caro/featured-caro.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PhotoDialogComponent } from './components/photodialog/photodialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MacarouselComponent } from './components/macarousel/macarousel.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

import { FormsModule } from '@angular/forms';
import { ToppartComponent } from './components/toppart/toppart.component';
// import { ProfilecomponentComponent } from './component/profilecomponent/profilecomponent.component';
import { ProfileComponent } from './component/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedComponent,
    IllustrationComponent,
    IllustrationsAndMangaComponent,
    GallgallComponent,
    PhotoDialogComponent,
    MacarouselComponent,
    SearchBarComponent,
    ToppartComponent,
    // ProfilecomponentComponent,
    ProfileComponent,
    // FeaturedCaroComponent
  ],
  imports: [
    // NgbModule,
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule,
        MatDialogModule,
        FormsModule ,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
