import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-image-section',
  templateUrl: './image-section.component.html',
  styleUrls: ['./image-section.component.css']
})
export class ImageSectionComponent {
  @Input() imageUrl: string | undefined;
}
