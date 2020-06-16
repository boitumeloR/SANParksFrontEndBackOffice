import { Component, OnInit } from '@angular/core';
import {UpdateParkConfirmationComponent} from 'src/app/modals/park/update-park-confirmation/update-park-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-update-park',
  templateUrl: './update-park.component.html',
  styleUrls: ['./update-park.component.scss']
})
export class UpdateParkComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updatePark(){
    const confirmDialog = this.dialog.open(UpdateParkConfirmationComponent);
  }
}
