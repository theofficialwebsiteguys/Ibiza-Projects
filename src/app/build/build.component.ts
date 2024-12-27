import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-build',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  templateUrl: './build.component.html',
  styleUrl: './build.component.scss'
})
export class BuildComponent {

}
