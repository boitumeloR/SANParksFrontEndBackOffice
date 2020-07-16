import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteParkSuccessfulComponent } from 'src/app/modals/park/delete-park-successful/delete-park-successful.component';
import { DeleteParkUnsuccessfulComponent } from 'src/app/modals/park/delete-park-unsuccessful/delete-park-unsuccessful.component';

@Component({
  selector: 'app-delete-park',
  templateUrl: './delete-park.component.html',
  styleUrls: ['./delete-park.component.scss']
})
export class DeleteParkComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  } 

  successfulDeletePark(){
    const deleteParkSuccessfulDialog = this.dialog.open(DeleteParkSuccessfulComponent);
  }

  unsuccessfulDeletePark(){
    const deleteParkUnsuccessfulDialog = this.dialog.open(DeleteParkUnsuccessfulComponent);
  }
}
