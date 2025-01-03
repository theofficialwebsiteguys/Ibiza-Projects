import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-build',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './build.component.html',
  styleUrl: './build.component.scss'
})
export class BuildComponent {

}
