import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { UpdateWildcardCategoryConfirmationComponent } from 'src/app/modals/wildcard-category/update-wildcard-category-confirmation/update-wildcard-category-confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-update-wildcard-category',
  templateUrl: './update-wildcard-category.component.html',
  styleUrls: ['./update-wildcard-category.component.scss']
})
export class UpdateWildcardCategoryComponent implements OnInit {
  updateWildcardCategoryForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateWildcardCategoryComponent>) { }

  ngOnInit(): void {
    this.updateWildcardCategoryForm = this.formBuilder.group({
      wildcardCategoryName: ['', Validators.required],
      wildcardCategoryDescription : ['', Validators.required],
      adultLimit: ['', Validators.required],
      childLimit : ['', Validators.required]
    });
  }

  updateWildcardCategory(){
    if(this.updateWildcardCategoryForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const updateWildcardCategoryConfirmationDialog = this.dialog.open(UpdateWildcardCategoryConfirmationComponent)
    }
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
    confirmCancelDialog.afterClosed().subscribe(result => {
      if(result == true){
        this.dialogRef.close();
      }
    });
  }

  displayValidationError() {
    this.validationErrorSnackBar.open("The entered details are not in the correct format. Please try again.", "OK", {
      duration: 3500,
    });
  }
}
