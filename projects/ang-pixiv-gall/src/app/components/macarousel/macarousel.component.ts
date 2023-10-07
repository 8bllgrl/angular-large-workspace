import { Component } from '@angular/core';

@Component({
  selector: 'app-macarousel',
  templateUrl: './macarousel.component.html',
  styleUrls: ['./macarousel.component.css']
})
export class MacarouselComponent {
  items = [
    'https://cdn.midjourney.com/fd077f1b-17ea-4ff3-9f9a-2f70b8b3f4fb/0_0.png',
    'assets/image2.jpg',
    'assets/image3.jpg',
    'assets/image4.jpg',
    'assets/image5.jpg',
    'assets/image6.jpg'
  ];
  currentSlide = 0;

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  nextSlide() {
    if (this.currentSlide < this.items.length - 1) {
      this.currentSlide++;
    }
  }
  setCurrentSlide(index: number) {
    this.currentSlide = index;
  }
}
