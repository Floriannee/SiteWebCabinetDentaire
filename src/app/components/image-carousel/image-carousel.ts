import { Component } from '@angular/core';

@Component({
  selector: 'image-carousel',
  imports: [],
  templateUrl: './image-carousel.html',
  styleUrl: './image-carousel.css'
})
export class ImageCarousel {
  currentIndex: number = 0;
  images: string[] = [
    'assets/img/photocab1.jpg',
    'assets/img/photocab2.jpg',
    'assets/img/photocab3.jpg',
    'assets/img/photocab4.jpg',
    'assets/img/photocab5.jpg',
    'assets/img/photocab6.jpg'
  ];

  nextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; 
    }
  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;  
    }
  }
}
