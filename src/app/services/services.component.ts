import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    { title: 'Decks', image: 'assets/Deck/deck-display.jpg' },
    { title: 'Gazebos', image: 'assets/Gazebo/gazebo-full.jpg' },
    { title: 'Additions', image: 'assets/Additions/addition-display.jpg' },
    { title: 'Walls', image: 'assets/Gazebo/IMG_0544.jpg' },
    { title: 'Roofs', image: 'assets/Additions/IMG_0613.jpg' },
    { title: 'Porch', image: 'assets/Deck/IMG_3888.jpg' },

  ];
}
