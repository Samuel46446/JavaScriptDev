import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component/home.component';
import { MedecinsListComponent } from './components/medecins-list/medecins-list.component/medecins-list.component';
import { MedecinDetailComponent } from './components/medecin-detail/medecin-detail.component/medecin-detail.component';
import { ContactComponent } from './components/contact-component/contact-component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // route racine  
  { path: 'medecins', component: MedecinsListComponent },// liste  
  { path: 'medecins/:id', component: MedecinDetailComponent }, // détail (paramètre)  
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }, // wildcard (toujours en dernier)
 ];
