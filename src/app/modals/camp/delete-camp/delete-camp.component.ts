import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteCampSuccessfulComponent } from 'src/app/modals/camp/delete-camp-successful/delete-camp-successful.component';

@Component({
  selector: 'app-delete-camp',
  templateUrl: './delete-camp.component.html',
  styleUrls: ['./delete-camp.component.scss']
})
export class DeleteCampComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulDeleteCamp(){
    const deleteCampSuccessfulDialog = this.dialog.open(DeleteCampSuccessfulComponent);
  }
}
