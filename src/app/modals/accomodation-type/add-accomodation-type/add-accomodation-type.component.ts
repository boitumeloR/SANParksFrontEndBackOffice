import { Component, OnInit , ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddAccomodationTypeConfirmationComponent} from 'src/app/modals/accomodation-type/add-accomodation-type-confirmation/add-accomodation-type-confirmation.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-add-accomodation-type',
  templateUrl: './add-accomodation-type.component.html',
  styleUrls: ['./add-accomodation-type.component.scss']
})
export class AddAccomodationTypeComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  basicAccomodationTypeDetails: FormGroup;
  campsForAccomodationType: FormGroup;
  imagesAccomodationType: FormGroup;

  accomodationTypesImages = [];

  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddAccomodationTypeComponent>) { }

  ngOnInit(): void {
    this.basicAccomodationTypeDetails = this.formBuilder.group({
      accomodationType: ['', Validators.required],
      accomodationTypeDescription : ['', Validators.required],
      noOfBeds : ['', [Validators.required, Validators.min(0)]],
      noOfBaths : ['', [Validators.required, Validators.min(0)]],
      adultLimit : ['', [Validators.required, Validators.min(0)]],
      childLimit : ['', [Validators.required, Validators.min(0)]]
    });
    // lets not foget the second step validation

    this.imagesAccomodationType = this.formBuilder.group({
      image: ['', Validators.required]
    });
  }

  stepperToCampSelection(){
   if(this.basicAccomodationTypeDetails.invalid){
      this.displayValidationError();
    }
    else{
      this.myStepper.next();
    } 
  }

  addAccomodationType(){
    if(this.imagesAccomodationType.invalid){
      this.displayImageNeeded();
    }
    else{
      this.dialogRef.close();
      const addAccomodationTypeConfirmationDialog = this.dialog.open(AddAccomodationTypeConfirmationComponent)
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

  displayImageNeeded() {
    this.validationErrorSnackBar.open("Please upload images for this accomodation type.", "OK", {
      duration: 2000,
    });
  }

  selectFile(event) { // We need to check to make sure it is an image. Use Mime
		var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
		reader.onload = (_event) => {
      var url = reader.result; 
      this.accomodationTypesImages.push(url)
    }
  }
}

