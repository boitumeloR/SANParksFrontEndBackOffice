import { Component, OnInit } from '@angular/core';
import {UpdateWildcardRateComponent} from 'src/app/modals/wildcard-rate/update-wildcard-rate/update-wildcard-rate.component';
import {DeleteWildcardRateComponent} from 'src/app/modals/wildcard-rate/delete-wildcard-rate/delete-wildcard-rate.component'
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-view-wildcard-rate',
  templateUrl: './view-wildcard-rate.component.html',
  styleUrls: ['./view-wildcard-rate.component.scss']
})
export class ViewWildcardRateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateWildcardRate(){
    const updateWildcardRateDialog = this.dialog.open(UpdateWildcardRateComponent,{disableClose: true});
  }

  deleteWildcardRate(){
    const deleteWildcardRateDialog =  this.dialog.open(DeleteWildcardRateComponent);
  }
}
