import { Component } from '@angular/core';
import { ForDirective } from '../../directives/for.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-page',
  standalone: true,
  imports: [ForDirective, CommonModule, FormsModule],
  templateUrl: './structural-page.component.html',
  styleUrl: './structural-page.component.css'
})
export class StructuralPageComponent {
  numberOfIterations: number=0;
}
