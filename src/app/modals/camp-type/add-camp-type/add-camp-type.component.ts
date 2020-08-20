import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddCampTypeConfirmationComponent} from 'src/app/modals/camp-type/add-camp-type-confirmation/add-camp-type-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { CampType, CampTypeService } from 'src/app/services/CampType/camp-type.service';
import { GlobalService } from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-add-camp-type',
  templateUrl: './add-camp-type.component.html',
  styleUrls: ['./add-camp-type.component.scss']
})
export class AddCampTypeComponent implements OnInit {
  addCampTypeForm: FormGroup;
  newCampType: CampType;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              // tslint:disable-next-line: max-line-length
              private dialogRef: MatDialogRef<AddCampTypeComponent>, private campTypeService: CampTypeService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.addCampTypeForm = this.formBuilder.group({
      campTypeName: ['', Validators.required],
      campTypeDescription : ['', Validators.required]
    });
  }

  addCampType(){
    if (this.addCampTypeForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addCampTypeDialog =  this.dialog.open(AddCampTypeConfirmationComponent);

      addCampTypeDialog.afterClosed().subscribe( result => {
        if (result === true){
           const newCampType = {
            CampTypeName: this.addCampTypeForm.get('campTypeName').value,
            CampTypeDescription: this.addCampTypeForm.get('campTypeDescription').value
          };
           this.campTypeService.CreateCampType(newCampType, this.globalService.GetServer());
        }
      });
    }
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
    confirmCancelDialog.afterClosed().subscribe(result => {
      if (result === true){
        this.dialogRef.close();
      }
    });
  }

  displayValidationError() {
    this.validationErrorSnackBar.open('The entered details are not in the correct format. Please try again.', 'OK', {
      duration: 3500,
    });
  }
}
