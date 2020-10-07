import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import { LoginFailedComponent } from 'src/app/subcomponents/login/login-failed/login-failed.component';
import { UserNotFoundComponent } from 'src/app/subcomponents/login/user-not-found/user-not-found.component';
import { ForgotPasswordSuccessfulComponent } from 'src/app/subcomponents/login/forgot-password-successful/forgot-password-successful.component';
import { ForgotPasswordUnsucessfulComponent } from 'src/app/subcomponents/login/forgot-password-unsucessful/forgot-password-unsucessful.component';
import { ResetPasswordSucessfulComponent } from 'src/app/subcomponents/login/reset-password-sucessful/reset-password-sucessful.component';
import { ResetPasswordUnsuccessfulComponent } from 'src/app/subcomponents/login/reset-password-unsuccessful/reset-password-unsuccessful.component';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Session {
  Username: string;
  Password: string;
  SessionID: string;
  UserSecret: string;
  Error: string;
  SessionExpiry: Date;
  RoleID: number;
  isEmployee: boolean;
  isValidEmployee: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public UserRole: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get UserRoles() {
    return this.UserRole.asObservable();
  }

  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router,
              private validationErrorSnackBar: MatSnackBar) { }
  login(User, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/Auth/Login`, User).subscribe((result: any) => {
      if (result.Error){
       const loginUnsuccessful = this.dialog.open(LoginFailedComponent);
      }
      else if (result.isEmployee && result.isValidEmployee){
        localStorage.setItem('user', JSON.stringify(result));
        this.loggedIn.next(true);

        const user = JSON.parse(localStorage.getItem('user'));
        const loggedUser =  user.RoleID;
        this.UserRole.next(loggedUser);
        this.router.navigate(['/Home']);
      }
      else{
        this.authorizationError();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: error.message }
      });
    });
  }

  logout(User, link){
    return this.http.post(`${link}/api/Auth/Logout`, User).subscribe(() => {
      localStorage.removeItem('user');
      this.loggedIn.next(false);
      this.router.navigate(['/Login']);
    });
  }

  forgotPassword(User, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/employee/ForgotPassword`, User).subscribe((result: any) => {
      if (result.userNotFound){
        const userNotFoundDialog = this.dialog.open(UserNotFoundComponent);
      }
      else if (result.Error)
      {
        const ForgotPasswordUnsucessfulDialog = this.dialog.open(ForgotPasswordUnsucessfulComponent);
        ForgotPasswordUnsucessfulDialog.afterClosed().subscribe(() => {
          this.router.navigate(['/Login']);
        });
      }
      else{
        const ForgotPasswordSucessfulDialog = this.dialog.open(ForgotPasswordSuccessfulComponent);
        ForgotPasswordSucessfulDialog.afterClosed().subscribe(() => {
          this.router.navigate(['/Login']);
        });
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: error.message }
      });
    });
  }

  resetPassword(User, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/employee/ChangePassword`, User).subscribe((result: any) => {
      if (result.Error)
      {
        const ResetPasswordUnsucessfulDialog = this.dialog.open(ResetPasswordUnsuccessfulComponent);
        ResetPasswordUnsucessfulDialog.afterClosed().subscribe(() => {
          this.router.navigate(['/Login']);
        });
      }
      else{
        const ResetPasswordSucessfulDialog = this.dialog.open(ResetPasswordSucessfulComponent);
        ResetPasswordSucessfulDialog.afterClosed().subscribe(() => {
          this.router.navigate(['/Login']);
        });
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: error.message }
      });
    });
  }

  authorizationError(){
    this.validationErrorSnackBar.open('The action you are trying to perform is unauthorized', 'OK', {
      duration: 3500,
    });
  }
}
