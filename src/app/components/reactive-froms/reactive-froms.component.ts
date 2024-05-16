import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MoveButtonDirective } from '../../directives/move-button.directive';

@Component({
  selector: 'app-reactive-froms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MoveButtonDirective],
  templateUrl: './reactive-froms.component.html',
  styleUrl: './reactive-froms.component.css'
})
export class ReactiveFromsComponent {
  group: FormGroup;

  constructor() {
    this.group = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      date: new FormControl(null, [Validators.required]),
      age: new FormControl({ value: null, disabled: true }, Validators.min(7))
    });
    this.group.get('age')?.touched;
  }

  ngOnInit(): void {
    this.group.get('date')?.valueChanges.subscribe(value => {
      const age = this.calculateAge(value);
      this.group.get('age')?.setValue(age);
    });
  }

  calculateAge(dateString: string): number {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
