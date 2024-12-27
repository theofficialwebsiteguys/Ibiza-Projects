import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, HeroComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  comment: string = '';

  constructor() {}

  onSubmit() {
    const formData = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      comment: this.comment
    };

  }
}
