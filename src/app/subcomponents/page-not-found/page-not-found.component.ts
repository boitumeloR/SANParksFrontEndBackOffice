import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoginService } from 'src/app/services/Login/login.service';
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private title: Title, private loginService: LoginService) { }

  ngOnInit(): void {
    this.title.setTitle('Page Not Found');
    this.loginService.loggedIn.next(false);
    localStorage.clear();
  }
}
