import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  loginForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passwordPattern = "";
  constructor(private sc: AuthService, public formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['',[ Validators.required]],
    })
  }

  get f() { return this.loginForm.controls; }
  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.sc.login(this.loginForm.value)
    .subscribe(
      data => {          
        if(data == null) {
          alert("Uername or password is wrong");
          
        }else {
          console.log("Login successful");     
  
          if(data.user.role == 'Client') {
            this.router.navigate(['/home']);
          } 
  
          if( data.user.role == 'Admin') {
            this.router.navigate(['/dashboard']);
          }
        }
      }, err => {
        alert("Login failed");

      })
}
}