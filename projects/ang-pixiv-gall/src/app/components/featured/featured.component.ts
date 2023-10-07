import { Component } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent {
  items: number[] = [1, 2, 3, 4, 5, 6, 7];
  currentSlide = 0;

  getSlideStyle(i: number) {
    let offset = i - this.currentSlide;
    let transform = `translateX(${offset * 100}%)`;
    if (offset < 0) {
      transform += ' rotateY(60deg)';
    } else if (offset > 0) {
      transform += ' rotateY(-60deg)';
    }
    return {
      transform,
      zIndex: -Math.abs(offset)
    };
  }

  prevSlide() {
    this.currentSlide = Math.max(0, this.currentSlide - 1);
  }

  nextSlide() {
    this.currentSlide = Math.min(this.items.length - 1, this.currentSlide + 1);
  }
}
