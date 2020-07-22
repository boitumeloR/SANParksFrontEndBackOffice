import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { UpdateWildcardClusterConfirmationComponent } from 'src/app/modals/wildcard-cluster/update-wildcard-cluster-confirmation/update-wildcard-cluster-confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-update-wildcard-cluster',
  templateUrl: './update-wildcard-cluster.component.html',
  styleUrls: ['./update-wildcard-cluster.component.scss']
})

export class UpdateWildcardClusterComponent implements OnInit {
  listOfParks = [{parkName:'Addo Elephant National Park'},{parkName:'Garden Route National Park'},{parkName:'Golden Gate Highlands National Park'},{parkName:'Karoo National Park'},{parkName:'Kruger National Park'},{parkName:'Namaqua National Park'},{parkName:'Table Mountain National Park'},{parkName:'West Coast National Park'}]
  updateWildcardClusterForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateWildcardClusterComponent>) { }

  ngOnInit(): void {
    this.updateWildcardClusterForm = this.formBuilder.group({
      wildcardClusterName: ['', Validators.required],
      wildcardClusterDescription : ['', Validators.required],
      parksInCluster : ['', Validators.required]
    });
  }

  updateWildcardCluster(){
    if(this.updateWildcardClusterForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const updateWildcardClusterConfirmationDialog = this.dialog.open(UpdateWildcardClusterConfirmationComponent)
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
