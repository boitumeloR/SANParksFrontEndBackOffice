import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-update-user-role-confirmation',
  templateUrl: './update-user-role-confirmation.component.html',
  styleUrls: ['./update-user-role-confirmation.component.scss']
})
export class UpdateUserRoleConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
