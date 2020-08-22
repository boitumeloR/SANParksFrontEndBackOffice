import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddWildcardCategoryConfirmationComponent} from 'src/app/modals/wildcard-category/add-wildcard-category-confirmation/add-wildcard-category-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { WildcardCategoryService, WildcardCategory } from 'src/app/services/WildcardCategory/wildcard-category.service';
import { GlobalService } from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-add-wildcard-category',
  templateUrl: './add-wildcard-category.component.html',
  styleUrls: ['./add-wildcard-category.component.scss']
})
export class AddWildcardCategoryComponent implements OnInit {
  addWildcardCategoryForm: FormGroup;
  newWildcardCategory: WildcardCategory;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              // tslint:disable-next-line: max-line-length
              private dialogRef: MatDialogRef<AddWildcardCategoryComponent>, private wildcardCategoryService: WildcardCategoryService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.addWildcardCategoryForm = this.formBuilder.group({
      wildcardCategoryName: ['', Validators.required],
      wildcardCategoryDescription : ['', Validators.required],
      AdultLimit: ['', Validators.required],
      ChildLimit : ['', Validators.required]
    });
  }

  addWildcardCategory(){
    if (this.addWildcardCategoryForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addWildcardCategoryConfirmationDialog =  this.dialog.open(AddWildcardCategoryConfirmationComponent);
      addWildcardCategoryConfirmationDialog.afterClosed().subscribe( result => {
        if (result === true){
           const newWildcardCategory = {
            CategoryName: this.addWildcardCategoryForm.get('wildcardCategoryName').value,
            CategoryDescription: this.addWildcardCategoryForm.get('wildcardCategoryDescription').value,
            AdultLimit: this.addWildcardCategoryForm.get('AdultLimit').value,
            ChildLimit: this.addWildcardCategoryForm.get('ChildLimit').value
          };
           this.wildcardCategoryService.CreateWildcardCategory(newWildcardCategory, this.globalService.GetServer());
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
