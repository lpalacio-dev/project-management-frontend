import { Component, inject, signal } from '@angular/core';
import {FormsModule, FormBuilder, ReactiveFormsModule, Validator} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-login-component',
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
    private formBuilder = inject(FormBuilder);

    loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
}