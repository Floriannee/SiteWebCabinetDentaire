import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  protected title = 'SiteWebCabinet';


  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)  
    ).subscribe(() => {
      setTimeout(() => {
        window.scrollTo(0, 0);  
      }, 100);
    });
  }
}
