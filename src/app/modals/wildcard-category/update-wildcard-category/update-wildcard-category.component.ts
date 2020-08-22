import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { UpdateWildcardCategoryConfirmationComponent } from 'src/app/modals/wildcard-category/update-wildcard-category-confirmation/update-wildcard-category-confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { WildcardCategoryService, WildcardCategory } from 'src/app/services/WildcardCategory/wildcard-category.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-update-wildcard-category',
  templateUrl: './update-wildcard-category.component.html',
  styleUrls: ['./update-wildcard-category.component.scss']
})
export class UpdateWildcardCategoryComponent implements OnInit {
  updateWildcardCategoryForm: FormGroup;
  wildcardCategory;
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateWildcardCategoryComponent>, private wildcardCategoryService: WildcardCategoryService,
              private globalService: GlobalService) { }

  ngOnInit(): void {
    this.wildcardCategory = JSON.parse(localStorage.getItem('wildcardCategory'));

    this.updateWildcardCategoryForm = this.formBuilder.group({
      WildcardCategoryName: [this.wildcardCategory.WildcardCategoryName, Validators.required],
      WildcardCategoryDescription : [this.wildcardCategory.WildcardCategoryDescription, Validators.required],
      AdultLimit: [this.wildcardCategory.AdulLimit, Validators.required],
      ChildLimit: [this.wildcardCategory.ChildLimit, Validators.required]
    });
  }

  updateWildcardCategory(){
    if (this.updateWildcardCategoryForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const updateWildcardCategoryConfirmationDialog = this.dialog.open(UpdateWildcardCategoryConfirmationComponent);
      updateWildcardCategoryConfirmationDialog.afterClosed().subscribe( result => {
        if (result === true){
           const wildcardCategory = {
            WildcardCategoryID: this.wildcardCategory.WildcardCategoryID,
            CategoryName: this.updateWildcardCategoryForm.get('WildcardCategoryName').value,
            CategoryDescription: this.updateWildcardCategoryForm.get('WildcardCategoryDescription').value,
            AdultLimit: this.updateWildcardCategoryForm.get('AdultLimit').value,
            ChildLimit: this.updateWildcardCategoryForm.get('ChildLimit').value,
          };
           this.wildcardCategoryService.UpdateWildcardCategory(wildcardCategory, this.globalService.GetServer());
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
