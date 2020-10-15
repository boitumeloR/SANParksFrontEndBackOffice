import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/Login/login.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  sessionID;
  constructor(private formBuilder: FormBuilder,  private validationErrorSnackBar: MatSnackBar,
              private globalService: GlobalService, private router: Router, private loginService: LoginService,
              private route: ActivatedRoute, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Reset Password');
    this.loginService.loggedIn.next(false);
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmedPass: ['', [Validators.required]]
    });

    this.route.queryParams.subscribe(params => {
      this.sessionID = params.key;
    });
  }

  changePassword(){
    if (this.resetPasswordForm.invalid){
      this.displayValidationError();
    }
    else if (this.resetPasswordForm.get('password').value !== this.resetPasswordForm.get('confirmedPass').value){
      this.displayPasswordError();
    }
    else{
      const updatedUser = {
        Password: this.resetPasswordForm.get('password').value,
        SessionID: this.sessionID
      };
      this.loginService.resetPassword(updatedUser, this.globalService.GetServer());
    }
  }

  displayPasswordError(){
    this.validationErrorSnackBar.open('Password confirmation doesn\'t match the password.', 'OK', {
      duration: 3500,
    });
  }

  displayValidationError(){
    this.validationErrorSnackBar.open('The entered details are not in the correct format. Please try again.', 'OK', {
      duration: 3500,
    });
  }
}
