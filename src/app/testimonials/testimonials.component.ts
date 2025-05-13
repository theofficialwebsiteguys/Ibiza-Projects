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
      name: 'Corey Zbar',
      description:
        'I hired Kenji in August 2024 to fully renovate two gutted apartments in a building I purchased as an investment property. From start to finish, Kenji handled everything — project management, budgeting, sourcing materials, overseeing inspections — and he did it all with an impressive level of professionalism and care.\n\n' +
        'The work included flooring, kitchens, bathrooms, structural beams, roof repairs, painting, siding, drywall, gutters, and more. Every part of the job was executed with precision and attention to detail, and the final results were exceptional.\n\n' +
        'What truly set Kenji apart was his communication. He kept me informed every step of the way, was always available, and tackled any issue that came up with transparency and speed. The project stayed on time and on budget, which, as any investor knows, is no small feat.\n\n' +
        'I’d confidently recommend Kenji for any renovation or construction project. He’s reliable, skilled, and truly dedicated to delivering top-quality work.',
      image: 'assets/default.jpg',
      rating: 5,
    },
    {
      name: 'Dr. Alan Pressman, D.M.D.',
      description:
        'In June and July of 2024, I hired Kenji Harper Jr. for two major home improvement projects — a deck renovation and a foundation repair. I couldn’t be more pleased with the results.\n\n' +
        'Kenji removed and replaced my failing deck boards and rails with composite boards and aluminum railings, reinforcing the existing frame with additional blocking to ensure long-term safety and durability. The craftsmanship was excellent, and the work was completed efficiently and cleanly.\n\n' +
        'He also repaired a foundation crack that had been leaking water into my basement — a problem another contractor had previously failed to resolve. Kenji fully excavated the area, removed the faulty repair, and properly sealed the crack with concrete and tar. Six months later, there’s still no sign of a leak.\n\n' +
        'Kenji took the time to understand my goals, executed the work professionally, and left the site clean and on schedule. He’s a true asset in this field, and I highly recommend him.',
      image: 'assets/default.jpg',
      rating: 5,
    },
    {
      name: 'Nayira Padilla-Lago',
      description:
        'I was referred to Kenji Harper Jr. by a friend and first hired him in 2023 for a few small home repairs. Since then, Kenji has completed multiple projects in my home, including installing a new staircase and railings, rebuilding and painting my deck stairs, remodeling my shed, and replacing the ceilings and walls in my basement with drywall.\n\n' +
        'Kenji has consistently impressed me with his professionalism, punctuality, and the high quality of his work.\n\n' +
        'I’m extremely pleased with the results and look forward to working with him on future projects. I would confidently recommend Kenji to anyone in need of reliable and skilled home improvement services.',
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
