import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() isHomePage: boolean = true; // Default to home page
  @Input() subpageTitle: string = 'Subpage Title'; // Title for subpages
  @Input() subpageImage: string = '../../assets/subpage-default.jpg'; // Default subpage image
}
