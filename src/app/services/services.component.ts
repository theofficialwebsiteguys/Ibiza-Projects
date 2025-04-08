import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    { title: 'Decks', image: 'assets/deck-service.png' },
    { title: 'Gazebos', image: 'assets/Gazebo/gazebo-full.jpg' },
    { title: 'Additions', image: 'assets/addition-service.png' },
    { title: 'Painting', image: 'assets/painting-service.png' },
    { title: 'Interior', image: 'assets/interior-service.png' },
    { title: 'Sheds', image: 'assets/Shed/IMG_1460.jpg' },

  ];
}
