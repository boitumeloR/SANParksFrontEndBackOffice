import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddWildcardClusterConfirmationComponent} from 'src/app/modals/wildcard-cluster/add-wildcard-cluster-confirmation/add-wildcard-cluster-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-wildcard-cluster',
  templateUrl: './add-wildcard-cluster.component.html',
  styleUrls: ['./add-wildcard-cluster.component.scss']
})
export class AddWildcardClusterComponent implements OnInit {
  addWildcardClusterForm: FormGroup;
  listOfParks = [{parkName:'Addo Elephant National Park'},{parkName:'Garden Route National Park'},{parkName:'Golden Gate Highlands National Park'},{parkName:'Karoo National Park'},{parkName:'Kruger National Park'},{parkName:'Namaqua National Park'},{parkName:'Table Mountain National Park'},{parkName:'West Coast National Park'}]
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddWildcardClusterComponent>) { }

  ngOnInit(): void {
    this.addWildcardClusterForm = this.formBuilder.group({
      wildcardClusterName: ['', Validators.required],
      wildcardClusterDescription : ['', Validators.required],
      parksInCluster : ['', Validators.required]
    });
  }

  addWildcardCluster(){
    if(this.addWildcardClusterForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addWildcardClusterConfirmationDialog = this.dialog.open(AddWildcardClusterConfirmationComponent);
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