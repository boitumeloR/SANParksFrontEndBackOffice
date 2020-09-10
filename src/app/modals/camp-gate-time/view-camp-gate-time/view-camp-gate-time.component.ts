import { Component, OnInit } from '@angular/core';
import { DeleteCampGateTimeComponent } from 'src/app/modals/camp-gate-time/delete-camp-gate-time/delete-camp-gate-time.component';
import { UpdateCampGateTimeComponent } from 'src/app/modals/camp-gate-time/update-camp-gate-time/update-camp-gate-time.component';
import { MatDialog } from '@angular/material/dialog';
import { CampGateTime, CampGateTimeService } from 'src/app/services/CampGateTime/camp-gate-time.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-view-camp-gate-time',
  templateUrl: './view-camp-gate-time.component.html',
  styleUrls: ['./view-camp-gate-time.component.scss']
})
export class ViewCampGateTimeComponent implements OnInit {
  campGateTime: CampGateTime;
  constructor(private dialog: MatDialog, private campGateTimeService: CampGateTimeService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.campGateTime =  JSON.parse(localStorage.getItem('campGateTime'));
  }

  updateCampGateTime(){
    const updateCampGateTime = this.dialog.open(UpdateCampGateTimeComponent, {disableClose: true});
  }

  deleteCampGateTime(){
    const deleteCampGateTimeDialog = this.dialog.open(DeleteCampGateTimeComponent);

    deleteCampGateTimeDialog.afterClosed().subscribe(result => {
      if (result === true){
        const user = JSON.parse(localStorage.getItem('user'));
        const authenticateUser = {
            authenticateUser: user
          };
        this.campGateTimeService.deleteCampGateTime(authenticateUser, this.campGateTime.CampGateTimeID, this.globalService.GetServer());
      }
    });
  }
}
