import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';
import { SocialLinksSectionComponent } from './components/social-links-section/social-links-section.component';
import { ImageSectionComponent } from './components/image-section/image-section.component';
import { BioSectionComponent } from './components/bio-section/bio-section.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    SocialLinksSectionComponent,
    ImageSectionComponent,
    BioSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
