 import { Component, OnInit, ViewChild} from '@angular/core';
 import {MatDialog} from '@angular/material/dialog';
 import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
 import {UpdateAccomodationTypeConfirmationComponent} from 'src/app/modals/accomodation-type/update-accomodation-type-confirmation/update-accomodation-type-confirmation.component';
 import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
 import {MatSnackBar } from '@angular/material/snack-bar';
 import { MatDialogRef } from '@angular/material/dialog';
 import { MatStepper } from '@angular/material/stepper';
 import { ParkService } from 'src/app/services/Park/park.service';
 import { GlobalService } from 'src/app/services/Global/global.service';
 import { Variable } from '@angular/compiler/src/render3/r3_ast';
 import { AccommodationTypeService } from 'src/app/services/AccommodationType/accommodation-type.service';
 @Component({
  selector: 'app-update-accomodation-type',
  templateUrl: './update-accomodation-type.component.html',
  styleUrls: ['./update-accomodation-type.component.scss']
})
export class UpdateAccomodationTypeComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  basicUpdateAccomodationTypeDetails: FormGroup;
  campsForAccomodationType: FormGroup;
  imagesAccomodationType: FormGroup;

  accomodationTypesImages = [];
  accommodationType;
  parkWithCamps;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateAccomodationTypeComponent>, private parkService: ParkService,
              private globalService: GlobalService, private accommodationTypeService: AccommodationTypeService) { }
              // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
     this.onLoadCheck();
  }

  ngOnInit(): void {
    this.accommodationType = JSON.parse(localStorage.getItem('accommodationType'));

    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkWithCamps = result.Parks;
    });

    this.basicUpdateAccomodationTypeDetails = this.formBuilder.group({
      accomodationType: [this.accommodationType.AccTypeName, Validators.required],
      accomodationTypeDescription: [this.accommodationType.AccTypeDescription, Validators.required],
      noOfBeds : [this.accommodationType.NumBeds, [Validators.required, Validators.min(0)]],
      noOfBaths : [this.accommodationType.NumBaths, [Validators.required, Validators.min(0)]],
      adultLimit : [this.accommodationType.AdultLimit, [Validators.required, Validators.min(0)]],
      childLimit : [this.accommodationType.ChildLimit, [Validators.required, Validators.min(0)]]
    });

    this.campsForAccomodationType = this.formBuilder.group({
        ListOfAssociatedCamp: this.formBuilder.array([])
    });

    this.imagesAccomodationType = this.formBuilder.group({
      image: ['', Validators.required]
    });
  }

  updateAccomodationType(){
    if (this.imagesAccomodationType.invalid){
      this.displayImageNeeded();
    }
    else{
      this.dialogRef.close();
      const updateAccomodationTypeConfirmationDialog = this.dialog.open(UpdateAccomodationTypeConfirmationComponent);

      updateAccomodationTypeConfirmationDialog.afterClosed().subscribe(result => {
        if (result === true){
          const selectedCamps = this.campsForAccomodationType.get('ListOfAssociatedCamp').value as FormArray;

          const updateAccommodationType = {
            AccommodationTypeID: this.accommodationType.AccommodationTypeID,
            AccTypeName: this.basicUpdateAccomodationTypeDetails.get('accomodationType').value,
            AccTypeDescription: this.basicUpdateAccomodationTypeDetails.get('accomodationTypeDescription').value,
            NumBeds: this.basicUpdateAccomodationTypeDetails.get('noOfBeds').value,
            NumBaths: this.basicUpdateAccomodationTypeDetails.get('noOfBaths').value,
            AdultLimit: this.basicUpdateAccomodationTypeDetails.get('adultLimit').value,
            ChildLimit: this.basicUpdateAccomodationTypeDetails.get('childLimit').value,
            ListOfAssociatedCamp: selectedCamps
            // remember to send an image list as well
          };

          this.accommodationTypeService.updateAccommodationType(updateAccommodationType, this.globalService.GetServer());
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
  stepperToCampSelection(){
    if (this.basicUpdateAccomodationTypeDetails.invalid){
       this.displayValidationError();
     }
     else{
       this.myStepper.next();
     }
   }

   onChange(event) {
    const campsAvailableAt =  this.campsForAccomodationType.get('ListOfAssociatedCamp') as FormArray;
    console.log(event.source.value)
    if (event.checked) {
      campsAvailableAt.push(new FormControl(event.source.value));
    }
    else {
      const i = campsAvailableAt.controls.findIndex(x => x.value === event.source.value);
      campsAvailableAt.removeAt(i);
    }
  }

  onLoadCheck(){
    this.accommodationType.CampsAvailableAt.forEach(element => {
      const thisCampCheckbox = (document.getElementById(element.CampID) as HTMLInputElement);
      thisCampCheckbox.checked = true;
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
