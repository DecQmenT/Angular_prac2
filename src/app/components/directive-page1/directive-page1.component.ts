import { Component } from '@angular/core';
import { MoveButtonDirective } from '../../directives/move-button.directive';

@Component({
  selector: 'app-directive-page1',
  standalone: true,
  imports: [MoveButtonDirective],
  templateUrl: './directive-page1.component.html',
  styleUrl: './directive-page1.component.css'
})
export class DirectivePage1Component {

}
