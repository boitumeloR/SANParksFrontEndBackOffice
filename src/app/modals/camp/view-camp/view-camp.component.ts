import { Component, OnInit } from '@angular/core';
import {UpdateCampComponent} from 'src/app/modals/camp/update-camp/update-camp.component';
import {DeleteCampComponent} from 'src/app/modals/camp/delete-camp/delete-camp.component';
import {MatDialog} from '@angular/material/dialog';
import { Camp, CampService } from 'src/app/services/Camp/camp.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-view-camp',
  templateUrl: './view-camp.component.html',
  styleUrls: ['./view-camp.component.scss']
})

export class ViewCampComponent implements OnInit {
  camp;

  constructor(private dialog: MatDialog, private campService: CampService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.camp = JSON.parse(localStorage.getItem('camp'));
  }

  updateCamp(){
    const updateCampDialog = this.dialog.open(UpdateCampComponent, {disableClose: true});
  }

  deleteCamp(){
    const deleteCampDialog = this.dialog.open(DeleteCampComponent);

    deleteCampDialog.afterClosed().subscribe(result => {
      if (result === true){
        const user = JSON.parse(localStorage.getItem('user'));
        const authenticateUser = {
            authenticateUser: user
          };
        this.campService.deleteCamp(authenticateUser, this.camp.CampID, this.globalService.GetServer());
      }
    });
  }
}
