import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Soins } from './pages/soins/soins';
import { Equipe } from './pages/equipe/equipe';
import { Galerie } from './pages/galerie/galerie';
import { Blog } from './pages/blog/blog';
import { SoinsImplant } from './pages/soins/soins-implant/soins-implant';
import { SoinsAligneurs } from './pages/soins/soins-aligneurs/soins-aligneurs';
import { SoinsParodontologie } from './pages/soins/soins-parodontologie/soins-parodontologie';
import { SoinsConservateur } from './pages/soins/soins-conservateur/soins-conservateur';
import { SoinsDentdesagesse } from './pages/soins/soins-dentdesagesse/soins-dentdesagesse';
import { SoinsCouronne } from './pages/soins/soins-couronne/soins-couronne';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'soins', component: Soins },
  { path: 'soins/implant', component: SoinsImplant},
  { path: 'soins/aligneurs', component: SoinsAligneurs},
  { path: 'soins/parodontologie', component: SoinsParodontologie},
  { path: 'soins/soinsconservateur', component: SoinsConservateur},
  { path: 'soins/dentdesagesse', component: SoinsDentdesagesse},
  { path: 'soins/couronne', component: SoinsCouronne},
  { path: 'equipe', component: Equipe },
  { path: 'galerie', component: Galerie },
  { path: 'blog', component: Blog },
  { path: '**', redirectTo: '' }
];
