import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { LoginFailedComponent } from 'src/app/subcomponents/login/login-failed/login-failed.component';
import { UserNotFoundComponent } from 'src/app/subcomponents/login/user-not-found/user-not-found.component';
import { ForgotPasswordSuccessfulComponent } from 'src/app/subcomponents/login/forgot-password-successful/forgot-password-successful.component';
import { ForgotPasswordUnsucessfulComponent } from 'src/app/subcomponents/login/forgot-password-unsucessful/forgot-password-unsucessful.component';
import { ResetPasswordSucessfulComponent } from 'src/app/subcomponents/login/reset-password-sucessful/reset-password-sucessful.component';
import { ResetPasswordUnsuccessfulComponent } from 'src/app/subcomponents/login/reset-password-unsuccessful/reset-password-unsuccessful.component';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router) { }

  login(User, link){
    return this.http.post(`${link}/api/Auth/Login`, User).subscribe((result: any) => {
      if (result.Error){
       const loginUnsuccessful = this.dialog.open(LoginFailedComponent);
      }
      else{
        localStorage.setItem('user', JSON.stringify(result));
        this.loggedIn.next(true);
        this.router.navigate(['/Park']);
      }
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
    });
  }

  resetPassword(User, link){
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
    });
  }
}
