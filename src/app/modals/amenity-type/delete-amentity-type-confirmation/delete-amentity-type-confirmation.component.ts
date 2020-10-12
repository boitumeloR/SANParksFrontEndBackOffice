import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-amentity-type-confirmation',
  templateUrl: './delete-amentity-type-confirmation.component.html',
  styleUrls: ['./delete-amentity-type-confirmation.component.scss']
})
export class DeleteAmentityTypeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  
}
