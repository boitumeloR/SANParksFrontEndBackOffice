import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddWildcardClusterConfirmationComponent} from 'src/app/modals/wildcard-cluster/add-wildcard-cluster-confirmation/add-wildcard-cluster-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { ParkService } from 'src/app/services/Park/park.service';
import { WildcardClusterService } from 'src/app/services/WildcardCluster/wildcard-cluster.service';
import { GlobalService } from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-add-wildcard-cluster',
  templateUrl: './add-wildcard-cluster.component.html',
  styleUrls: ['./add-wildcard-cluster.component.scss']
})
export class AddWildcardClusterComponent implements OnInit {
  addWildcardClusterForm: FormGroup;
  parkCheckBox;
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddWildcardClusterComponent>, private parkService: ParkService,
              private globalService: GlobalService, private wildcardClusterService: WildcardClusterService) { }

  ngOnInit(): void {
    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkCheckBox = result.Parks;
    });

    this.addWildcardClusterForm = this.formBuilder.group({
      wildcardClusterName: ['', Validators.required],
      wildcardClusterDescription : ['', Validators.required],
      ListOfAssociatedParks: this.formBuilder.array([])
    });
  }

  onChange(event) {
    const parksForCluster =  this.addWildcardClusterForm.get('ListOfAssociatedParks') as FormArray;

    if (event.checked) {
      parksForCluster.push(new FormControl(event.source.value));
    }
    else {
      const i = parksForCluster.controls.findIndex(x => x.value === event.source.value);
      parksForCluster.removeAt(i);
    }
  }

  addWildcardCluster(){
    if (this.addWildcardClusterForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addWildcardClusterConfirmationDialog = this.dialog.open(AddWildcardClusterConfirmationComponent);

      addWildcardClusterConfirmationDialog.afterClosed().subscribe(result => {
        if (result === true){
          const selectedParks = this.addWildcardClusterForm.get('ListOfAssociatedParks').value as FormArray;

          const newWildcardCluster = {
            WildcardClusterName: this.addWildcardClusterForm.get('wildcardClusterName').value,
            WildcardClusterDescription: this.addWildcardClusterForm.get('wildcardClusterDescription').value,
            listOfParks: selectedParks
          };

          this.wildcardClusterService.CreateWildcardCluster(newWildcardCluster, this.globalService.GetServer());
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
