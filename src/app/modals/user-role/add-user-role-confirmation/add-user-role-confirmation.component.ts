import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-user-role-confirmation',
  templateUrl: './add-user-role-confirmation.component.html',
  styleUrls: ['./add-user-role-confirmation.component.scss']
})
export class AddUserRoleConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
