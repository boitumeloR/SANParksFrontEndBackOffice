import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/Login/login.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EmployeeService } from 'src/app/services/Employee/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewProfileComponent} from 'src/app/modals/employee/view-profile/view-profile.component';
import {HelpComponent} from 'src/app/subcomponents/help/help.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  opened: boolean;
  loggedIn$: Observable<boolean>;
  userRole$: Observable<number>;
  number: number;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @ViewChild('sideNav') sideNav;

  constructor(private router: Router, private loginService: LoginService, private globalService: GlobalService,
              private employeeService: EmployeeService, private dialog: MatDialog) {
  }
  loggedUser;
  ngOnInit(): void {
    this.opened = false;
    this.loggedIn$ = this.loginService.isLoggedIn;
    this.loginService.UserRoles.pipe( tap(XX => {
      this.number = XX as number;
    })).subscribe();
  }
  toggleSideBar() {
    this.sideNav.toggle();
  }
  toggleBurger() {
    this.opened = !this.opened;
  }
  logout(){
    const user = JSON.parse(localStorage.getItem('user'));
    this.loginService.logout(user, this.globalService.GetServer());
  }

  viewProfile(){
    this.employeeService.viewProfile(this.globalService.GetServer()).subscribe((result: any) => {
        localStorage.setItem('loggedEmployee', result.loggedEmployee);
        const viewProfileDialog = this.dialog.open(ViewProfileComponent);
        localStorage.setItem('loggedEmployee', JSON.stringify(result.Employees[0]));
    });
  }

  getHelp(){
    const displayHelpPage = this.dialog.open(HelpComponent, {disableClose: true});
    const speech =  new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    this.employeeService.viewProfile(this.globalService.GetServer()).subscribe((response: any) => {
      console.log(response);
      speech.text = `Welcome ${response.Employees[0].EmployeeName} ${response.Employees[0].EmployeeSurname}. My name is Tabu, how may I help you today?`;
      window.speechSynthesis.speak(speech);
    });
  }
}
