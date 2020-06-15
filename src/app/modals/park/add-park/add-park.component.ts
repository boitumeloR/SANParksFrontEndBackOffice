import { Component, OnInit } from '@angular/core';
import {AddParkConfirmationComponent} from 'src/app/modals/park/add-park-confirmation/add-park-confirmation.component';
import {MatDialog} from '@angular/material/dialog'
@Component({
  selector: 'app-add-park',
  templateUrl: './add-park.component.html',
  styleUrls: ['./add-park.component.scss']
})
export class AddParkComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
   
  }
  addPark(){
    const addParkConfirmationDiag = this.dialog.open(AddParkConfirmationComponent);
  }
}
