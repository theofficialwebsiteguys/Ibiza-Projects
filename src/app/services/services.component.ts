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
    { title: 'Decks', image: 'assets/Deck/deck-display.jpg' },
    { title: 'Gazebos', image: 'assets/Gazebo/gazebo-full.jpg' },
    { title: 'Additions', image: 'assets/Additions/addition-display.jpg' },
    { title: 'Painting', image: 'assets/Gilchrest/master-bedroom.jpg' },
    { title: 'Interior', image: 'assets/Gilchrest/kitchen-4.jpg' },
    { title: 'Sheds', image: 'assets/Shed/IMG_1460.jpg' },

  ];
}
