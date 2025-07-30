import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageCarousel } from '../../components/image-carousel/image-carousel';

@Component({
  selector: 'app-home',
  imports: [RouterModule,ImageCarousel],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
