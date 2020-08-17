import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-add-park-confirmation',
  templateUrl: './add-park-confirmation.component.html',
  styleUrls: ['./add-park-confirmation.component.scss']
})
export class AddParkConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
