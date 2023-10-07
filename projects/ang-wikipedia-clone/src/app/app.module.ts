import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { InformationBoxComponent } from './components/content/information-box/information-box.component';
import { ContentsBoxComponent } from './components/content/contents-box/contents-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleContentComponent } from './components/Article/article-content/article-content.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { SearchBarComponent } from './components/Header/search-bar/search-bar.component';
import { UserMenuComponent } from './components/Header/user-menu/user-menu.component';
import { NavigationLinksComponent } from './components/LeftSidebar/navigation-links/navigation-links.component';
import { SectionComponent } from './components/Article/ArticleContent/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    ContentComponent,
    InformationBoxComponent,
    ContentsBoxComponent,
    SidebarComponent,
    FooterComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    ArticleComponent,
    ArticleContentComponent,
    PageLayoutComponent,
    SearchBarComponent,
    UserMenuComponent,
    NavigationLinksComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
