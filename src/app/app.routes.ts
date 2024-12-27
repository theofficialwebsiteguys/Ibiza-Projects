import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuildComponent } from './build/build.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },  
    { path: 'home', redirectTo: '', pathMatch: 'full' }, 
    { path: 'build', component: BuildComponent},
    { path: 'showcase', component: ShowcaseComponent},
    { path: 'about', component: AboutPageComponent},
    { path: 'contact', component: ContactComponent},
];
