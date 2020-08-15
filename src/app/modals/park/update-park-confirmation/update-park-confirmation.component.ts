import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-update-park-confirmation',
  templateUrl: './update-park-confirmation.component.html',
  styleUrls: ['./update-park-confirmation.component.scss']
})
export class UpdateParkConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
