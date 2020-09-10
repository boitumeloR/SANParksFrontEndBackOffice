import { Component, OnInit } from '@angular/core';
import {UpdateParkComponent} from 'src/app/modals/park/update-park/update-park.component';
import {DeleteParkComponent} from 'src/app/modals/park/delete-park/delete-park.component';
import { MatDialog } from '@angular/material/dialog';
import { Park, ParkService } from 'src/app/services/Park/park.service';
import {GlobalService} from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-view-park',
  templateUrl: './view-park.component.html',
  styleUrls: ['./view-park.component.scss']
})
export class ViewParkComponent implements OnInit {
  park: Park;
  constructor(private dialog: MatDialog, private parkService: ParkService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.park = JSON.parse(localStorage.getItem('park'));
  }
  updatePark(){
    const dialogRef = this.dialog.open(UpdateParkComponent, {disableClose: true});
  }

  deletePark(){
    const deleteParkConfirmation =  this.dialog.open(DeleteParkComponent);
    deleteParkConfirmation.afterClosed().subscribe(result => {
      if (result === true){
        const user = JSON.parse(localStorage.getItem('user'));
        const authenticateUser = {
            authenticateUser: user
          };
        this.parkService.DeletePark(authenticateUser, this.park.ParkID, this.globalService.GetServer());
      }
    });
  }
}
