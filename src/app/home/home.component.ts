import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ServicesComponent } from '../services/services.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, NavbarComponent, ServicesComponent, TestimonialsComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
