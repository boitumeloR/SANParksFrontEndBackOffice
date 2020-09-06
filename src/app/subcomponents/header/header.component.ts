import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/Login/login.service';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  opened: boolean;
  loggedIn$: Observable<boolean>;

  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(private router: Router, private loginService: LoginService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.opened = false;
    // this is used to check if the user is signed in and thereafter will display the header & nav
    this.loggedIn$ = this.loginService.isLoggedIn;
  }

  toggleBurger() {
    this.opened = !this.opened;
  }

  logout(){
    const user = JSON.parse(localStorage.getItem('user'));
    this.loginService.logout(user, this.globalService.GetServer());
  }
}
