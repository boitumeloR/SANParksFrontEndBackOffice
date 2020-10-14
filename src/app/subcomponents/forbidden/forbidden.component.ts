import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.scss']
})
export class ForbiddenComponent implements OnInit {
  forbiddenForm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  returnLogin(){
    this.router.navigate(['/Login']);
  }
}
