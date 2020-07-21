import { Component, OnInit } from '@angular/core';
import { DeleteParkGateTimeComponent} from 'src/app/modals/park-gate-time/delete-park-gate-time/delete-park-gate-time.component';
import { UpdateParkGateTimeComponent} from 'src/app/modals/park-gate-time/update-park-gate-time/update-park-gate-time.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-view-park-gate-time',
  templateUrl: './view-park-gate-time.component.html',
  styleUrls: ['./view-park-gate-time.component.scss']
})
export class ViewParkGateTimeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  updateParkGateTime(){
    const updateGateTimeDialog = this.dialog.open(UpdateParkGateTimeComponent,{disableClose: true});

  }

  deleteParkGateTime(){
    const deleteGateTimeDialog = this.dialog.open(DeleteParkGateTimeComponent);

  }
}
