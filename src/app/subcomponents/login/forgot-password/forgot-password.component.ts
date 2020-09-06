import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/Login/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder,  private validationErrorSnackBar: MatSnackBar,
              private globalService: GlobalService, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]]
    });
  }

  reset(){
    if (this.forgotPasswordForm.invalid){
      this.displayValidationError();
    }
    else{
        const user = {
          EmployeeEmail: this.forgotPasswordForm.get('username').value
        };

        this.loginService.forgotPassword(user, this.globalService.GetServer());
      }
  }

  back(){
    this.router.navigate(['/Login']);
  }

  displayValidationError(){
    this.validationErrorSnackBar.open('The entered details are not in the correct format. Please try again.', 'OK', {
      duration: 3500,
    });
  }
}
