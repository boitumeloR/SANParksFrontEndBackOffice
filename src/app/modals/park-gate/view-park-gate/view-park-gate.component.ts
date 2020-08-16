import { Component, OnInit } from '@angular/core';
import {UpdateParkGateComponent} from 'src/app/modals/park-gate/update-park-gate/update-park-gate.component';
import {DeleteParkGateComponent} from 'src/app/modals/park-gate/delete-park-gate/delete-park-gate.component'
import { MatDialog } from '@angular/material/dialog';
import { ParkGate, ParkGateService } from 'src/app/services/ParkGate/park-gate.service';
import { GlobalService } from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-view-park-gate',
  templateUrl: './view-park-gate.component.html',
  styleUrls: ['./view-park-gate.component.scss']
})
export class ViewParkGateComponent implements OnInit {
  parkGate: ParkGate;
  constructor(private dialog: MatDialog, private parkGateService: ParkGateService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.parkGate = JSON.parse(localStorage.getItem('parkGate'));
  }

  updateParkGate(){
    const dialogRef = this.dialog.open(UpdateParkGateComponent, {disableClose: true});
  }
  deleteParkGate(){
    const deleteParkGateDialog =  this.dialog.open(DeleteParkGateComponent);

    deleteParkGateDialog.afterClosed().subscribe(result => {
      if (result === true){
        this.parkGateService.DeleteParkGate(this.parkGate.ParkGateID, this.globalService.GetServer());
      }
    });
  }
}
