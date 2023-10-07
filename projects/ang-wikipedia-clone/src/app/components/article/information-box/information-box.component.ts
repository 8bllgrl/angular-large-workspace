import { Component, Input } from '@angular/core';
import { InformationBox } from '../article.model';

@Component({
  selector: 'app-information-box',
  templateUrl: './information-box.component.html',
  styleUrls: ['./information-box.component.css']
})
export class InformationBoxComponent {
  @Input() informationBox!: InformationBox;
}
