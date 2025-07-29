import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Soins } from './pages/soins/soins';
import { Equipe } from './pages/equipe/equipe';
import { Galerie } from './pages/galerie/galerie';
import { Blog } from './pages/blog/blog';
import { SoinsImplant } from './pages/soins/soins-implant/soins-implant';
import { SoinsAligneurs } from './pages/soins/soins-aligneurs/soins-aligneurs';
import { SoinsParodontologie } from './pages/soins/soins-parodontologie/soins-parodontologie';
import { SanteBucco } from './pages/blog/sante-bucco/sante-bucco';

import { DentisteEnfant } from './pages/blog/dentiste-enfant/dentiste-enfant';
import { ProthesesDentaires } from './pages/blog/protheses-dentaires/protheses-dentaires';
import { DentsDeSagesse } from './pages/blog/dents-de-sagesse/dents-de-sagesse';
import { BlanchimentDentaire } from './pages/blog/blanchiment-dentaire/blanchiment-dentaire';
import { MaladiesParodontales } from './pages/blog/maladies-parodontales/maladies-parodontales';
import { SoinsPedodontie } from './pages/soins/soins-pedodontie/soins-pedodontie';
import { SoinsProthesesDentaires } from './pages/soins/soins-protheses-dentaires/soins-protheses-dentaires';
import { SoinsDentisterieGenerale } from './pages/soins/soins-dentisterie-generale/soins-dentisterie-generale';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'soins', component: Soins },
  { path: 'soins/dentisterie-generale', component: SoinsDentisterieGenerale }, 
  { path: 'soins/aligneurs-dentaires', component: SoinsAligneurs },
  { path: 'soins/protheses-dentaires', component: SoinsProthesesDentaires}, 
  { path: 'soins/parodontologie', component: SoinsParodontologie },
  { path: 'soins/pedodontie', component: SoinsPedodontie},
  { path: 'soins/implant-dentaire', component: SoinsImplant },
  { path: 'equipe', component: Equipe },
  { path: 'galerie', component: Galerie },
  { path: 'blog', component: Blog },
  { path: 'blog/sante-bucco', component: SanteBucco },  
  { path: 'blog/protheses-dentaires', component: ProthesesDentaires },  
  { path: 'blog/dents-de-sagesse', component: DentsDeSagesse },  
  { path: 'blog/dentiste-enfant', component: DentisteEnfant },  
    { path: 'blog/blanchiment-dentaire', component: BlanchimentDentaire},
  { path: 'blog/maladies-parodontales', component: MaladiesParodontales},
  { path: '**', redirectTo: '' }
];
