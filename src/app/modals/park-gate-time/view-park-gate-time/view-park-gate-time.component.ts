import { Component, OnInit } from '@angular/core';
import { DeleteParkGateTimeComponent} from 'src/app/modals/park-gate-time/delete-park-gate-time/delete-park-gate-time.component';
import { UpdateParkGateTimeComponent} from 'src/app/modals/park-gate-time/update-park-gate-time/update-park-gate-time.component';
import {MatDialog} from '@angular/material/dialog';
import { ParkGateTime, ParkGateTimeService } from 'src/app/services/ParkGateTime/park-gate-time.service';
import { GlobalService } from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-view-park-gate-time',
  templateUrl: './view-park-gate-time.component.html',
  styleUrls: ['./view-park-gate-time.component.scss']
})
export class ViewParkGateTimeComponent implements OnInit {
  parkGateTime: ParkGateTime;
  constructor(private dialog: MatDialog, private globalService: GlobalService, private parkGateTimeService: ParkGateTimeService) { }

  ngOnInit(): void {
    this.parkGateTime = JSON.parse(localStorage.getItem('parkGateTime'));
  }
  updateParkGateTime(){
    const updateGateTimeDialog = this.dialog.open(UpdateParkGateTimeComponent, {disableClose: true});

  }

  deleteParkGateTime(){
    const deleteGateTimeDialog = this.dialog.open(DeleteParkGateTimeComponent);

    deleteGateTimeDialog.afterClosed().subscribe(result => {
      if (result === true){
        this.parkGateTimeService.DeleteParkGateTime(this.parkGateTime.PTimeID, this.globalService.GetServer());
      }
    });
  }
}
