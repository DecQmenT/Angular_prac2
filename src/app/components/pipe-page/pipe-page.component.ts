import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-pipe-page',
  standalone: true,
  imports: [FormsModule, TruncatePipe],
  templateUrl: './pipe-page.component.html',
  styleUrl: './pipe-page.component.css'
})
export class PipePageComponent {
  text: string = '';
  truncateLvl: number = 5;
}
