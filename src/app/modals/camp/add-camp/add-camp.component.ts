import { Component, OnInit } from '@angular/core';
import {AddCampConfirmationComponent} from 'src/app/modals/camp/add-camp-confirmation/add-camp-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-add-camp',
  templateUrl: './add-camp.component.html',
  styleUrls: ['./add-camp.component.scss']
})
export class AddCampComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addCamp(){
    const addCampDialog = this.dialog.open(AddCampConfirmationComponent)
  }
}
