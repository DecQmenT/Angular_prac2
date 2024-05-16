import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MoveButtonDirective } from '../../directives/move-button.directive';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, MoveButtonDirective],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  group : FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),Validators.required]),
    password: new FormControl(null,[Validators.minLength(6),Validators.required,Validators.maxLength(20)]),
  });
  check(){
    if(this.group.valid){
      alert('Login Success');
    }else{
      alert('Login Fail');
    }
  }
}
