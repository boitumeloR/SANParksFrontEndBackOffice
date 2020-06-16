import { Component, OnInit } from '@angular/core';
import {UpdateParkGateComponent} from 'src/app/modals/park-gate/update-park-gate/update-park-gate.component';
import {DeleteParkGateComponent} from 'src/app/modals/park-gate/delete-park-gate/delete-park-gate.component'
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-view-park-gate',
  templateUrl: './view-park-gate.component.html',
  styleUrls: ['./view-park-gate.component.scss']
})
export class ViewParkGateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateParkGate(){
    const dialogRef = this.dialog.open(UpdateParkGateComponent,{disableClose: true});
  }
  deleteParkGate(){
    const dialogRef =  this.dialog.open(DeleteParkGateComponent);
  }
}
