import { Component, OnInit } from '@angular/core';
import { UpdateActivityTypeComponent} from 'src/app/modals/activity-type/update-activity-type/update-activity-type.component';
import { DeleteActivityTypeComponent} from 'src/app/modals/activity-type/delete-activity-type/delete-activity-type.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-view-activity-type',
  templateUrl: './view-activity-type.component.html',
  styleUrls: ['./view-activity-type.component.scss']
})
export class ViewActivityTypeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  updateActivityType(){
    const updateCampDialog = this.dialog.open(UpdateActivityTypeComponent,{disableClose: true});
  }
  
  deleteActivityType(){
    const deleteCampDialog = this.dialog.open(DeleteActivityTypeComponent);
  }
} 
