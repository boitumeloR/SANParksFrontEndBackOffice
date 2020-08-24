import { Component, OnInit , ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddAccomodationTypeConfirmationComponent} from 'src/app/modals/accomodation-type/add-accomodation-type-confirmation/add-accomodation-type-confirmation.component';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { ParkService } from 'src/app/services/Park/park.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { AccommodationTypeService } from 'src/app/services/AccommodationType/accommodation-type.service';
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
  parkWithCamps;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddAccomodationTypeComponent>, private parkService: ParkService,
              private globalService: GlobalService, private accommodationTypeService: AccommodationTypeService) { }

  ngOnInit(): void {
    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkWithCamps = result.Parks;
    });

    this.basicAccomodationTypeDetails = this.formBuilder.group({
      accomodationType: ['', Validators.required],
      accomodationTypeDescription : ['', Validators.required],
      noOfBeds : ['', [Validators.required, Validators.min(0)]],
      noOfBaths : ['', [Validators.required, Validators.min(0)]],
      adultLimit : ['', [Validators.required, Validators.min(0)]],
      childLimit : ['', [Validators.required, Validators.min(0)]]
    });

    this.campsForAccomodationType = this.formBuilder.group({
      ListOfAssociatedCamp: this.formBuilder.array([])
    });

    this.imagesAccomodationType = this.formBuilder.group({
      image: ['', Validators.required]
    });
  }

  stepperToCampSelection(){
   if (this.basicAccomodationTypeDetails.invalid){
      this.displayValidationError();
    }
    else{
      this.myStepper.next();
    }
  }

  onChange(event) {
    const campsAvailableAt =  this.campsForAccomodationType.get('ListOfAssociatedCamp') as FormArray;

    if (event.checked) {
      campsAvailableAt.push(new FormControl(event.source.value));
    }
    else {
      const i = campsAvailableAt.controls.findIndex(x => x.value === event.source.value);
      campsAvailableAt.removeAt(i);
    }
  }

  stepperToImageSelection(){
    if (this.campsForAccomodationType.invalid){
       this.displayValidationError();
     }
     else{
      this.myStepper.next();
     }
   }

  addAccomodationType(){
    if (this.imagesAccomodationType.invalid){
      this.displayImageNeeded();
    }
    else{
      this.dialogRef.close();
      const addAccomodationTypeConfirmationDialog = this.dialog.open(AddAccomodationTypeConfirmationComponent);

      addAccomodationTypeConfirmationDialog.afterClosed().subscribe(result => {
        if (result === true){
          const selectedCamps = this.campsForAccomodationType.get('ListOfAssociatedCamp').value as FormArray;

          const newAccommodationType = {
            AccTypeName: this.basicAccomodationTypeDetails.get('accomodationType').value,
            AccTypeDescription: this.basicAccomodationTypeDetails.get('accomodationTypeDescription').value,
            NumBeds: this.basicAccomodationTypeDetails.get('noOfBeds').value,
            NumBaths: this.basicAccomodationTypeDetails.get('noOfBaths').value,
            AdultLimit: this.basicAccomodationTypeDetails.get('adultLimit').value,
            ChildLimit: this.basicAccomodationTypeDetails.get('childLimit').value,
            ListOfAssociatedCamp: selectedCamps
            // remember to send an image list as well
          };

          this.accommodationTypeService.createAccommodationType(newAccommodationType, this.globalService.GetServer());
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

  displayImageNeeded() {
    this.validationErrorSnackBar.open('Please upload images for this accomodation type.', 'OK', {
      duration: 2000,
    });
  }

  selectFile(event) { // We need to check to make sure it is an image. Use Mime
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
    const url = reader.result;
    this.accomodationTypesImages.push(url);
    };
  }
}

