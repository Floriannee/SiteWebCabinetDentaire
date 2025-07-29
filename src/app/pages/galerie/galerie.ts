import { Component } from '@angular/core';

@Component({
  selector: 'app-galerie',
  imports: [],
  templateUrl: './galerie.html',
  styleUrl: './galerie.css'
})
export class Galerie {

  openImage(src: string) {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img') as HTMLImageElement;

    if (popup && popupImg) {
      popup.style.display = 'block';  
      popupImg.src = src; 
    }
  }

  closeImage() {
    const popup = document.getElementById('popup');
    if (popup) {
      popup.style.display = 'none';  
    }
  }
}