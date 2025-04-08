import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  certifications = [
    { image: 'assets/cert1.png', label: '' },
    { image: 'assets/cert2.png', label: '' },
    { image: 'assets/cert3.png', label: '' }
  ];

  showLightbox = false;
  lightboxImage = '';

  openLightbox(image: string): void {
    this.lightboxImage = image;
    this.showLightbox = true;
  }

  closeLightbox(event?: Event): void {
    if (event) {
      event.stopPropagation(); // prevents close on inner span click
    }
    this.showLightbox = false;
    this.lightboxImage = '';
  }
}
