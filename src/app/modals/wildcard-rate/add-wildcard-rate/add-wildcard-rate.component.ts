import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddWildcardRateConfirmationComponent} from 'src/app/modals/wildcard-rate/add-wildcard-rate-confirmation/add-wildcard-rate-confirmation.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { WildcardClusterService } from 'src/app/services/WildcardCluster/wildcard-cluster.service';
import { WildcardCategoryService } from 'src/app/services/WildcardCategory/wildcard-category.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { WildcardRateService } from 'src/app/services/WildcardRate/wildcard-rate.service';
@Component({
  selector: 'app-add-wildcard-rate',
  templateUrl: './add-wildcard-rate.component.html',
  styleUrls: ['./add-wildcard-rate.component.scss']
})
export class AddWildcardRateComponent implements OnInit {
  addWildcardRateForm: FormGroup;
  wildcardCategoryDropDown;
  wildcardClusterDropdown;
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddWildcardRateComponent>, private wildcardClusterService: WildcardClusterService,
              private wildcardCategoryService: WildcardCategoryService, private globalService: GlobalService,
              private wildcardRateService: WildcardRateService) { }

  ngOnInit(): void {
    this.wildcardCategoryService.ReadWildcardCategory(this.globalService.GetServer()).subscribe((result: any) => {
      this.wildcardCategoryDropDown = result.WildcardCategories;
    });

    this.wildcardClusterService.ReadWildcardCluster(this.globalService.GetServer()).subscribe((result: any) => {
      this.wildcardClusterDropdown = result.WildcardClusters;
    });

    this.addWildcardRateForm = this.formBuilder.group({
      wildcardCluster: ['', Validators.required],
      wildcardCategory : ['', Validators.required],
      wildcardRate : ['', [Validators.required, Validators.min(1)]],
      dateEffective : ['', Validators.required]
    });
  }

  addWildcardRate(){
    if (this.addWildcardRateForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addWildcardRateConfirmation = this.dialog.open(AddWildcardRateConfirmationComponent);

      addWildcardRateConfirmation.afterClosed().subscribe(result => {
        if (result === true){
          const newWildcardRate = {
            WildcardCategoryID: this.addWildcardRateForm.get('wildcardCategory').value,
            WildcardClusterID: this.addWildcardRateForm.get('wildcardCluster').value,
            RateAmount: this.addWildcardRateForm.get('wildcardRate').value,
            DateEffective: this.addWildcardRateForm.get('dateEffective').value
          };

          this.wildcardRateService.CreateWildcardRate(newWildcardRate, this.globalService.GetServer());
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
