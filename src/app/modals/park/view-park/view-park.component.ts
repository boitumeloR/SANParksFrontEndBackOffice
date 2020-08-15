import { Component, OnInit } from '@angular/core';
import {UpdateParkComponent} from 'src/app/modals/park/update-park/update-park.component';
import {DeleteParkComponent} from 'src/app/modals/park/delete-park/delete-park.component';
import { MatDialog } from '@angular/material/dialog';
import { Park, ParkService } from 'src/app/services/Park/park.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { DeleteParkSuccessfulComponent } from 'src/app/modals/park/delete-park-successful/delete-park-successful.component';
import { DeleteParkUnsuccessfulComponent } from 'src/app/modals/park/delete-park-unsuccessful/delete-park-unsuccessful.component';
import { ParkComponent } from 'src/app/pages/park/park.component';
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
        this.parkService.DeletePark(this.park.ParkID, this.globalService.GetServer()).subscribe((deleteResult: any) => {
          if (deleteResult.Error){
            const deleteParkUnsuccessfulDialog = this.dialog.open(DeleteParkUnsuccessfulComponent);
          }
          else{
            const deleteParkSuccessfulDialog = this.dialog.open(DeleteParkSuccessfulComponent);
          }
        });
      }
    });
  }
}
