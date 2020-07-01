import { Component, OnInit } from '@angular/core';
import { UpdateAmenityPenaltyConfirmationComponent } from 'src/app/modals/amenity-penalty/update-amenity-penalty-confirmation/update-amenity-penalty-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-update-amenity-penalty',
  templateUrl: './update-amenity-penalty.component.html',
  styleUrls: ['./update-amenity-penalty.component.scss']
})
export class UpdateAmenityPenaltyComponent implements OnInit {

  selectAmenity: FormGroup;
  amenityPenalty: FormGroup;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateAmenityPenalty(){
    const updateAmenityPenaltyConfirmationDialog = this.dialog.open(UpdateAmenityPenaltyConfirmationComponent)
  }
}
