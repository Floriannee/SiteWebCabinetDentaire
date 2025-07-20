import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Soins } from './pages/soins/soins';
import { Equipe } from './pages/equipe/equipe';
import { Galerie } from './pages/galerie/galerie';
import { Blog } from './pages/blog/blog';

export const routes: Routes = [
  { path: '', component: Home},
  { path: 'soins', component: Soins },
  { path: 'equipe', component: Equipe },
  { path: 'galerie', component: Galerie },
  { path: 'blog', component: Blog },
  { path: '**', redirectTo: '' }
];
