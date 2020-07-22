import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteParkGateSuccessfulComponent } from 'src/app/modals/park-gate/delete-park-gate-successful/delete-park-gate-successful.component';
import {  DeleteParkGateUnsuccessfulComponent } from 'src/app/modals/park-gate/delete-park-gate-unsuccessful/delete-park-gate-unsuccessful.component';

@Component({
  selector: 'app-delete-park-gate',
  templateUrl: './delete-park-gate.component.html',
  styleUrls: ['./delete-park-gate.component.scss']
})
export class DeleteParkGateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  successfulDeleteParkGate(){
    const deleteParkGateSuccessfulDialog = this.dialog.open(DeleteParkGateSuccessfulComponent);
  }

  unsuccessfulDeleteParkGate(){
    const deleteParkGateUnsuccessfulDialog = this.dialog.open(DeleteParkGateUnsuccessfulComponent);
  }
}