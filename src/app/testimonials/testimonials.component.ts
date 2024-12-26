import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  users = [
    {
      name: 'John Smith',
      description:
        'The team exceeded our expectations! From start to finish, they were professional, reliable, and delivered a stunning result. We couldn’t be happier with our new home addition!',
      image: 'assets/default.jpg',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      description:
        'Outstanding craftsmanship and attention to detail. They kept us informed every step of the way and delivered on time and within budget. Highly recommend!',
      image: 'assets/default.jpg',
      rating: 5,
    },
    {
      name: 'Michael Brown',
      description:
        'I hired them for a complete kitchen remodel, and the results were beyond what I imagined. The team was courteous, punctual, and their work speaks for itself. Five stars!"',
      image: 'assets/default.jpg',
      rating: 5,
    },
  ];
  chunkedUsers = this.chunkArray(this.users, 3); // Function to chunk the array into groups of size

  chunkArray(array: any[], size: number): any[] {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  }
}
