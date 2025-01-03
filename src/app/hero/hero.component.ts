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

  backgroundImages = [
    'assets/Gazebo/gazebo-full.jpg',
    'assets/Gilchrest/side.jpg',
    'assets/Additions/addition-display.jpg',
    'assets/Shed/IMG_0730.jpg'
  ];

  currentImage = this.backgroundImages[0]; // Default image
  private imageInterval: any;

  ngOnInit(): void {
    this.startImageRotation();
  }

  ngOnDestroy(): void {
    if (this.imageInterval) {
      clearInterval(this.imageInterval);
    }
  }

  startImageRotation(): void {
    let index = 0;
    this.imageInterval = setInterval(() => {
      index = (index + 1) % this.backgroundImages.length; // Cycle through images
      this.currentImage = this.backgroundImages[index];
    }, 4000); 
  }
}
