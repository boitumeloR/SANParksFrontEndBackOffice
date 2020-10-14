import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { computeSegEndResizable } from '@fullcalendar/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      const roleID =  next.data['roleID'] as string;

      const user =  JSON.parse(localStorage.getItem('user'));
      if (user == null){
        this.router.navigate(['/Login']);
        localStorage.removeItem('user');
        return false;
      }
      else if (roleID === 'reporting'){
        if (user.RoleID === 3 || user.RoleID === 4){
          return true;
        }
        else{
          this.router.navigate(['/Forbidden']);
          localStorage.removeItem('user');
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
            this.router.navigate(['/Forbidden']);
            localStorage.removeItem('user');
            return false;
          }
        }
        else{
        if (user.RoleID === null || user.SessionExpiry === null || user.SessionID === null ||
            user.UserSecret === null || user.Username === null || user.RoleID === '' || user.SessionExpiry === '' ||
            user.SessionID === '' || user.UserSecret === '' || user.Username === '' ){
              this.router.navigate(['/Login']);
              localStorage.removeItem('user');
              return false;
        }
        else if (user.RoleID !== roleID){
            this.router.navigate(['/Forbidden']);
            localStorage.removeItem('user');
            return false;
        }
        else{
          return true;
        }
      }
    }
  }
}
