import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/Login/login.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  show;
  constructor(private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar, private loginService: LoginService,
              private globalService: GlobalService, private router: Router) { }

  ngOnInit(): void {
    this.loginService.loggedIn.next(false);
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required
      ]]
    });
  }

  showPassword() {
    this.show = !this.show;
  }

  login(){
    if (this.loginForm.invalid){
      this.displayValidationError();
    }
    else{
        const user = {
          Username: this.loginForm.get('username').value,
          Password: this.loginForm.get('password').value
        };

        this.loginService.login(user, this.globalService.GetServer());
      }
  }

  forgotPassword(){
    this.router.navigate(['/Forgot-Password']);
  }

  displayValidationError(){
    this.validationErrorSnackBar.open('The entered details are not in the correct format. Please try again.', 'OK', {
      duration: 3500,
    });
  }
}
