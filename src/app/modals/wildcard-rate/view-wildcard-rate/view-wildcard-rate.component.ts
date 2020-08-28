import { Component, OnInit } from '@angular/core';
import {UpdateWildcardRateComponent} from 'src/app/modals/wildcard-rate/update-wildcard-rate/update-wildcard-rate.component';
import {DeleteWildcardRateComponent} from 'src/app/modals/wildcard-rate/delete-wildcard-rate/delete-wildcard-rate.component';
import { MatDialog } from '@angular/material/dialog';
import { WildcardRateService } from 'src/app/services/WildcardRate/wildcard-rate.service';
import { GlobalService } from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-view-wildcard-rate',
  templateUrl: './view-wildcard-rate.component.html',
  styleUrls: ['./view-wildcard-rate.component.scss']
})
export class ViewWildcardRateComponent implements OnInit {

  wildcardRate;
  constructor(private dialog: MatDialog, private wildcardRateService: WildcardRateService,
              private globalService: GlobalService) { }

  ngOnInit(): void {
    this.wildcardRate = JSON.parse(localStorage.getItem('wildcardRate'));
  }

  updateWildcardRate(){
    const updateWildcardRateDialog = this.dialog.open(UpdateWildcardRateComponent, {disableClose: true});
  }

  deleteWildcardRate(){
    const deleteWildcardRateDialog =  this.dialog.open(DeleteWildcardRateComponent);

    deleteWildcardRateDialog.afterClosed().subscribe(result => {
      if (result === true){
        this.wildcardRateService.DeleteWildcardRate(this.wildcardRate.WildcardRateID, this.globalService.GetServer());
      }
    });
  }
}
