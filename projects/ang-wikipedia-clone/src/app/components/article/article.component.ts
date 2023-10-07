import { Component, OnInit } from '@angular/core';
import { Article, InformationBox, Section } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article;

  constructor() {
    const infoBox = new InformationBox();
    infoBox.title = 'Information Box Title';
    const infoBoxProperties = [
      { key: 'Developer', value: 'Project Moon' },
      { key: 'Release Date', value: 'April 9, 2016' }
    ];

    // const infoBox = new InformationBox('Information Box Title', infoBoxProperties);

    const section1 = new Section();
    section1.header = 'Premise';
    section1.bodyText = 'Lobotomy Corporation is a game inspired by...';

    const section2 = new Section();
    section2.header = 'Gameplay';
    section2.bodyText = 'Players take the role of...';

    const section3 = new Section();
    section3.header = 'Gameplay2';
    section3.bodyText = 'Players take the role of...';

    this.article = new Article();
    this.article.title = 'Lobotomy Corporation';
    this.article.informationBox = infoBox;
    this.article.sections = [section1, section2, section3];
  }

  ngOnInit(): void { }
}
