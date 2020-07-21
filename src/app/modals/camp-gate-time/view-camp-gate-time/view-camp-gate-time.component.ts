import { Component, OnInit } from '@angular/core';
import { DeleteCampGateTimeComponent } from 'src/app/modals/camp-gate-time/delete-camp-gate-time/delete-camp-gate-time.component';
import { UpdateCampGateTimeComponent } from 'src/app/modals/camp-gate-time/update-camp-gate-time/update-camp-gate-time.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-camp-gate-time',
  templateUrl: './view-camp-gate-time.component.html',
  styleUrls: ['./view-camp-gate-time.component.scss']
})
export class ViewCampGateTimeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateCampGateTime(){
    const updateCampGateTime = this.dialog.open(UpdateCampGateTimeComponent,{disableClose: true});
  }

  deleteCampGateTime(){
    const deleteCampGateTimeDialog = this.dialog.open(DeleteCampGateTimeComponent);
  }
}
