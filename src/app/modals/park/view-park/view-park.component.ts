import { Component, OnInit } from '@angular/core';
import {UpdateParkComponent} from 'src/app/modals/park/update-park/update-park.component';
import {DeleteParkComponent} from 'src/app/modals/park/delete-park/delete-park.component'
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-view-park',
  templateUrl: './view-park.component.html',
  styleUrls: ['./view-park.component.scss']
})
export class ViewParkComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  updatePark(){
    const dialogRef = this.dialog.open(UpdateParkComponent,{disableClose: true});
  }

  deletePark(){
    const dialogRef =  this.dialog.open(DeleteParkComponent);
  }
}
