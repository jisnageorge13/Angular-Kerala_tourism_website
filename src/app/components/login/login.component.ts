import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLoginView: boolean = true;
  loginForm: FormGroup;
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });

    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const isLocalData = localStorage.getItem("angular18Local");
      if (isLocalData) {
        const users = JSON.parse(isLocalData);
        const isUserFound = users.find((user: any) =>
          user.userName === this.loginForm.value.username &&
          user.password === this.loginForm.value.password
        );
        if (isUserFound) {
          this.router.navigateByUrl('home');
        } else {
          alert("Username or password is incorrect");
        }
      } else {
        alert("No user found");
      }
    } else {
      alert("Please fill out the login form correctly.");
    }
  }
  

  onRegister() {
    if (this.registrationForm.valid) {
      const isLocalData = localStorage.getItem("angular18Local");
      const newUser = {
        emailId: this.registrationForm.value.email,
        userName: this.registrationForm.value.username,
        password: this.registrationForm.value.password
      };

      let users = isLocalData ? JSON.parse(isLocalData) : [];
      users.push(newUser);
      localStorage.setItem("angular18Local", JSON.stringify(users));

      alert('Registration Success');
    } else {
      alert('Please fill out the registration form correctly.');
    }
  }
}
