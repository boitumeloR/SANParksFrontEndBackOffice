import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { computeSegEndResizable } from '@fullcalendar/core';
import { Observable } from 'rxjs';
import { LoginService } from '../services/Login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      const roleID =  next.data['roleID'] as string;

      const user =  JSON.parse(localStorage.getItem('user'));
      if (user == null){
        localStorage.removeItem('user');
        this.loginService.loggedIn.next(false);
        this.router.navigate(['/Login']);
        return false;
      }
      else if (roleID === 'reporting'){
        if (user.RoleID === 3 || user.RoleID === 4){
          return true;
        }
        else{
          localStorage.removeItem('user');
          this.loginService.loggedIn.next(false);
          this.router.navigate(['/Forbidden']);
          return false;
        }
      }
      else{
        if (roleID === 'home'){
          if (user.RoleID === 2 || user.RoleID === 3 || user.RoleID === 4 || user.RoleID === 5 || user.RoleID === 6
              || user.RoleID === 8){
                return true;
          }
          else{
            localStorage.removeItem('user');
            this.loginService.loggedIn.next(false);
            this.router.navigate(['/Forbidden']);
            return false;
          }
        }
        else{
        if (user.RoleID === null || user.SessionExpiry === null || user.SessionID === null ||
            user.UserSecret === null || user.Username === null || user.RoleID === '' || user.SessionExpiry === '' ||
            user.SessionID === '' || user.UserSecret === '' || user.Username === '' ){
              localStorage.removeItem('user');
              this.loginService.loggedIn.next(false);
              this.router.navigate(['/Login']);
              return false;
        }
        else if (user.RoleID !== roleID){
            localStorage.removeItem('user');
            this.loginService.loggedIn.next(false);
            this.router.navigate(['/Forbidden']);
            return false;
        }
        else{
          return true;
        }
      }
    }
  }
}
