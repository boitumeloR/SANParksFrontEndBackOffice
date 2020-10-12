import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateWildcardRateConfirmationComponent} from 'src/app/modals/wildcard-rate/update-wildcard-rate-confirmation/update-wildcard-rate-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { WildcardClusterService } from 'src/app/services/WildcardCluster/wildcard-cluster.service';
import { WildcardCategoryService } from 'src/app/services/WildcardCategory/wildcard-category.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { WildcardRateService } from 'src/app/services/WildcardRate/wildcard-rate.service';
@Component({
  selector: 'app-update-wildcard-rate',
  templateUrl: './update-wildcard-rate.component.html',
  styleUrls: ['./update-wildcard-rate.component.scss']
})
export class UpdateWildcardRateComponent implements OnInit {
  updateWildcardRateForm: FormGroup;
  wildcardRate;
  startDate;
  wildcardCategoryDropDown;
  wildcardClusterDropdown;
  listOfYears = [];
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateWildcardRateComponent>, private wildcardClusterService: WildcardClusterService,
              private wildcardCategoryService: WildcardCategoryService, private globalService: GlobalService,
              private wildcardRateService: WildcardRateService) { }

  ngOnInit(): void {
    let year = new Date().getFullYear();
    const limitYear = year + 4;
    while (year <= limitYear){
      this.listOfYears.push(year);
      year += 1;
     }
    this.wildcardCategoryService.ReadWildcardCategory(this.globalService.GetServer()).subscribe((result: any) => {
      this.wildcardCategoryDropDown = result.WildcardCategories;

      this.wildcardClusterService.ReadWildcardCluster(this.globalService.GetServer()).subscribe((resultWildcardCluster: any) => {
        this.wildcardClusterDropdown = resultWildcardCluster.WildcardClusters;
      });
    });

    this.wildcardRate = JSON.parse(localStorage.getItem('wildcardRate'));

    this.updateWildcardRateForm = this.formBuilder.group({
      wildcardCluster: [this.wildcardRate.WildcardClusterID, Validators.required],
      wildcardCategory : [this.wildcardRate.WildcardCategoryID, Validators.required],
      wildcardRate : [this.wildcardRate.RateAmount, [Validators.required, Validators.min(1)]],
      dateEffective : [this.wildcardRate.yearActive, Validators.required]
    });
  }

  updateWildcardRate(){
    if (this.updateWildcardRateForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const updateWildCardRateConfirmation = this.dialog.open(UpdateWildcardRateConfirmationComponent);

      updateWildCardRateConfirmation.afterClosed().subscribe(result => {
        if (result === true){
          const user = JSON.parse(localStorage.getItem('user'));

          const newWildcardRate = {
            WildcardRateID: this.wildcardRate.WildcardRateID,
            WildcardCategoryID: this.updateWildcardRateForm.get('wildcardCategory').value,
            WildcardClusterID: this.updateWildcardRateForm.get('wildcardCluster').value,
            RateAmount: this.updateWildcardRateForm.get('wildcardRate').value,
            DateEffective: this.updateWildcardRateForm.get('dateEffective').value,
            authenticateUser: user
          };

          this.wildcardRateService.UpdateWildcardRate(newWildcardRate, this.globalService.GetServer());
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
