import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';
import { GlobalService } from 'src/app/services/Global/global.service';
import { WildcardCategoryService } from 'src/app/services/WildcardCategory/wildcard-category.service';
import { WildcardClusterService } from 'src/app/services/WildcardCluster/wildcard-cluster.service';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { PurchaseWildcardService } from 'src/app/services/PurchaseWildcard/purchase-wildcard.service';
import { PurchaseWildcardConfirmationComponent } from 'src/app/pages/Purchase Wildcard/purchase-wildcard-confirmation/purchase-wildcard-confirmation.component';
@Component({
  selector: 'app-purchase-wildcard',
  templateUrl: './purchase-wildcard.component.html',
  styleUrls: ['./purchase-wildcard.component.scss']
})
export class PurchaseWildcardComponent implements OnInit {
  basicClient: FormGroup;
  wildcardSelection: FormGroup;
  dependent: FormGroup;
  clientData;
  wildcardCategoryDropDown;
  wildcardClusterDropdown;
  numberOfAdults = [];
  numberOfChildren = [];
  listOfDependents = [];
  @ViewChild('stepper') private myStepper: MatStepper;
  constructor(private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private wildcardClusterService: WildcardClusterService, private globalService: GlobalService,
              private wildcardCategoryService: WildcardCategoryService, private dialog: MatDialog,
              private dialogRef: MatDialogRef<PurchaseWildcardComponent>, private purchaseWildcardService: PurchaseWildcardService) { }

  ngOnInit(): void {
    this.clientData = JSON.parse(localStorage.getItem('client'));

    this.basicClient = this.formBuilder.group({
      clientName: [this.clientData.ClientName, Validators.required],
      cellphoneNumber: [this.clientData.ClientNumber, Validators.required],
      emailAddress: [this.clientData.clientEmail, Validators.required],
    });

    this.wildcardSelection = this.formBuilder.group({
      wildcardCluster: ['', Validators.required],
      wildcardCategory: ['', Validators.required],
      wildcardRate: ['', Validators.required]
    });

    this.dependent = this.formBuilder.group({
      dependentName: ['', Validators.required],
      dependentSurname: ['', Validators.required],
      dependentIdentityNumber: ['', Validators.required],
      dependentCellphone: ['', Validators.required],
      dependentEmailAddress: ['', Validators.required],
    });

    this.wildcardCategoryService.ReadWildcardCategory(this.globalService.GetServer()).subscribe((result: any) => {
      this.wildcardCategoryDropDown = result.WildcardCategories;
      localStorage.setItem('user', JSON.stringify(result.user));

      this.wildcardClusterService.ReadWildcardCluster(this.globalService.GetServer()).subscribe((resultWildcardCluster: any) => {
        this.wildcardClusterDropdown = resultWildcardCluster.WildcardClusters;
        localStorage.setItem('user', JSON.stringify(resultWildcardCluster.user));
      });
    });
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
    confirmCancelDialog.afterClosed().subscribe(result => {
      if (result === true){
        this.dialogRef.close();
      }
    });
  }

  stepperNext(){
   this.myStepper.next();
  }

  checkWCValidation(){
    if (this.wildcardSelection.invalid){
      this.wildcardValidation();
    }
    else{
      this.myStepper.next();
    }
  }
  getRate(){
    if (this.wildcardSelection.get('wildcardCategory').value !== '' && this.wildcardSelection.get('wildcardCluster').value !== ''){
      const wildcard = {
        WildcardCategoryID: this.wildcardSelection.get('wildcardCategory').value,
        WildcardClusterID: this.wildcardSelection.get('wildcardCluster').value,
      };

      this.purchaseWildcardService.getRate(wildcard, this.globalService.GetServer()).subscribe((response: any) => {

        if (response.noRateExists){
          this.wildcardSelection.get('wildcardRate').setValue('');
          this.noRateExists();
        }
        else{
          if (response.adultLimit > 0){
            this.numberOfAdults = Array(response.adultLimit).fill(1).map((x, i) => i + 1);
          }
          if (response.childLimit > 0){
            this.numberOfChildren = Array(response.childLimit).fill(1).map((x, i) => i + 1);
          }
          this.wildcardSelection.get('wildcardRate').setValue(response.rateAmount);
        }
      });
    }
  }
  purchaseWildcard(){
    if (this.dependent.invalid){
      this.displayValidationError();
    }
    else{
      for (let count = 1; count <= this.numberOfAdults.length; count ++){
        const adultDependent  = {
          Name: (document.getElementById(`adultDependentName${count}`) as HTMLInputElement).value,
          Surname: (document.getElementById(`adultDependentSurname${count}`) as HTMLInputElement).value,
          IdentityNumber: (document.getElementById(`adultDependentIdentityNumber${count}`) as HTMLInputElement).value,
          CellphoneNumber: (document.getElementById(`adultDependentCellphone${count}`) as HTMLInputElement).value,
          EmailAddress: (document.getElementById(`adultDependentEmailAddress${count}`) as HTMLInputElement).value,
        };

        this.listOfDependents.push(adultDependent);
      }

      for (let count = 1; count <= this.numberOfChildren.length; count ++){
        const childDependent  = {
          Name: (document.getElementById(`dependentName${count}`) as HTMLInputElement).value,
          Surname: (document.getElementById(`dependentSurname${count}`) as HTMLInputElement).value,
          IdentityNumber: (document.getElementById(`dependentIdentityNumber${count}`) as HTMLInputElement).value,
          CellphoneNumber: (document.getElementById(`dependentCellphone${count}`) as HTMLInputElement).value,
          EmailAddress: (document.getElementById(`dependentEmailAddress${count}`) as HTMLInputElement).value,
        };

        this.listOfDependents.push(childDependent);
      }

      const user = JSON.parse(localStorage.getItem('user'));
      const wildcardData = {
        clientID: this.clientData.clientID,
        WildcardCategoryID: this.wildcardSelection.get('wildcardCategory').value,
        WildcardClusterID: this.wildcardSelection.get('wildcardCluster').value,
        listOfDependents: this.listOfDependents,
        authenticateUser: user
      };
      const confirmPurchase = this.dialog.open(PurchaseWildcardConfirmationComponent);
      confirmPurchase.afterClosed().subscribe(result => {
        if (result === true){
          this.dialogRef.close();
          this.purchaseWildcardService.purchaseWildcard(wildcardData, this.globalService.GetServer());
        }
      });
    }
  }

  wildcardValidation() {
    this.validationErrorSnackBar.open('Please select a wildcard cluster and wildcard category.', 'OK', {
      duration: 3500,
    });
  }

  noRateExists() {
    this.validationErrorSnackBar.open('There is no wildcard rate for this category/cluster in this year.', 'OK', {
      duration: 3500,
    });
  }

  displayValidationError() {
    this.validationErrorSnackBar.open('The entered details are not in the correct format. Please try again.', 'OK', {
      duration: 3500,
    });
  }
}
