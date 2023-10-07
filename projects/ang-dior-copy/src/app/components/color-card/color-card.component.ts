import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-card',
  templateUrl: './color-card.component.html',
  styleUrls: ['./color-card.component.css']
})
export class ColorCardComponent {
  @Input() color: string | undefined;
  @Input() imageSrc: string | undefined;  // New input for image source
  getStyles() {
    return {
      'background-color': this.color,
      'background-image': this.imageSrc ? `url(${this.imageSrc})` : '',
      // 'background-blend-mode': 'multiply',
    };
  }
}