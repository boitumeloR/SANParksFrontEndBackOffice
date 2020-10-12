import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { UpdateWildcardClusterConfirmationComponent } from 'src/app/modals/wildcard-cluster/update-wildcard-cluster-confirmation/update-wildcard-cluster-confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { ParkService } from 'src/app/services/Park/park.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { WildcardClusterService } from 'src/app/services/WildcardCluster/wildcard-cluster.service';
@Component({
  selector: 'app-update-wildcard-cluster',
  templateUrl: './update-wildcard-cluster.component.html',
  styleUrls: ['./update-wildcard-cluster.component.scss']
})

export class UpdateWildcardClusterComponent implements OnInit {
  updateWildcardClusterForm: FormGroup;
  wildcardCluster;
  parkCheckBox;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateWildcardClusterComponent>, private parkService: ParkService,
              private globalService: GlobalService, private wildcardClusterService: WildcardClusterService) { }

  ngOnInit(): void {
    this.wildcardCluster = JSON.parse(localStorage.getItem('wildcardCluster'));

    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkCheckBox = result.Parks;
    });

    this.updateWildcardClusterForm = this.formBuilder.group({
      wildcardClusterName: [this.wildcardCluster.WildcardName, Validators.required],
      wildcardClusterDescription : [this.wildcardCluster.WildcardClusterDescription, Validators.required],
      ListOfAssociatedParks: this.formBuilder.array([])
    });
  }

  onChange(event) {
    const parksForCluster =  this.updateWildcardClusterForm.get('ListOfAssociatedParks') as FormArray;

    if (event.checked) {
      parksForCluster.push(new FormControl(event.source.value));
    }
    else {
      const i = parksForCluster.controls.findIndex(x => x.value === event.source.value);
      parksForCluster.removeAt(i);
    }
  }

  updateWildcardCluster(){
    if (this.updateWildcardClusterForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const updateWildcardClusterConfirmationDialog = this.dialog.open(UpdateWildcardClusterConfirmationComponent);

      updateWildcardClusterConfirmationDialog.afterClosed().subscribe(result => {
        if (result === true){
          const selectedParks = this.updateWildcardClusterForm.get('ListOfAssociatedParks').value as FormArray;
          const user = JSON.parse(localStorage.getItem('user'));

          const updateWildcardCluster = {
            WildcardClusterID: this.wildcardCluster.WildcardClusterID,
            WildcardClusterName: this.updateWildcardClusterForm.get('wildcardClusterName').value,
            WildcardClusterDescription: this.updateWildcardClusterForm.get('wildcardClusterDescription').value,
            listOfParks: selectedParks,
            authenticateUser: user
          };

          this.wildcardClusterService.UpdateWildcardCluster(updateWildcardCluster, this.globalService.GetServer());
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
