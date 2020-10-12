import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateCampTypeComponent} from 'src/app/modals/camp-type/update-camp-type/update-camp-type.component';
import {DeleteCampTypeComponent} from 'src/app/modals/camp-type/delete-camp-type/delete-camp-type.component';
import { CampType, CampTypeService} from 'src/app/services/CampType/camp-type.service';
import { GlobalService } from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-view-camp-type',
  templateUrl: './view-camp-type.component.html',
  styleUrls: ['./view-camp-type.component.scss']
})
export class ViewCampTypeComponent implements OnInit {
campType: CampType;
  constructor(private dialog: MatDialog, private campTypeService: CampTypeService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.campType = JSON.parse(localStorage.getItem('campType'));
  }

  updateCampType(){
    const updateCampTypeDialog = this.dialog.open(UpdateCampTypeComponent, {disableClose: true});
  }

  deleteCampType(){
    const deleteCampTypeDialog = this.dialog.open(DeleteCampTypeComponent);
    deleteCampTypeDialog.afterClosed().subscribe(result => {
      if (result === true){
        const user = JSON.parse(localStorage.getItem('user'));
        const authenticateUser = {
            authenticateUser: user
          };
        this.campTypeService.DeleteCampType(authenticateUser, this.campType.CampTypeID, this.globalService.GetServer());
      }
    });
  }
}
