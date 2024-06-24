import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLoginView: boolean = false
  userRegObj: any = {
    userName: '',
    emailId: '',
    password: ''
  }
  userLogin: any = {
    userName: '',
    password: ''
  }
  router =inject(Router)
  onRegister(registrationForm: NgForm) {
    if (registrationForm.valid) {
      const isLocalData = localStorage.getItem("angular18Local");
      if (isLocalData != null) {
        const localArray = JSON.parse(isLocalData);
        localArray.push(this.userRegObj);
        localStorage.setItem("angular18Local", JSON.stringify(localArray));
      } else {
        const localArray = [];
        localArray.push(this.userRegObj);
        localStorage.setItem("angular18Local", JSON.stringify(localArray));
      }
      alert('Registration Success');
    } else {
      alert('Please fill out the form correctly.');
    }
  }
  
  onLogin() {
    const isLocalData = localStorage.getItem("angular18Local");
    if (isLocalData != null) {
      const users = JSON.parse(isLocalData)
      const isUserFound = users.find((m: any) => m.userName == this.userLogin.userName && m.password == this.userLogin.password)
      if (isUserFound != undefined) {
        this.router.navigateByUrl('home')
      } else {
        alert("User name or password is incorrect")
      }
    } else {
      alert("No user found")
    }
  }
}
