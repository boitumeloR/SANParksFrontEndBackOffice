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

  accomodationTypesImages: any[] =  [];
  viewImages: File[] = [];
  parkWithCamps;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddAccomodationTypeComponent>, private parkService: ParkService,
              private globalService: GlobalService, private accommodationTypeService: AccommodationTypeService) { }

  ngOnInit(): void {
    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkWithCamps = result.Parks;
      localStorage.setItem('user', JSON.stringify(result.user));
    });

    this.basicAccomodationTypeDetails = this.formBuilder.group({
      accomodationType: ['', Validators.required],
      accomodationTypeDescription : ['', Validators.required],
      noOfBeds : ['', [Validators.required, Validators.min(0)]],
      noOfBaths : ['', [Validators.required, Validators.min(0)]],
      adultLimit : ['', [Validators.required, Validators.min(0)]],
      childLimit : ['', [Validators.required, Validators.min(0)]],
      maxLimit : ['', [Validators.required, Validators.min(0)]]
    });

    this.campsForAccomodationType = this.formBuilder.group({
      ListOfAssociatedCamp: this.formBuilder.array([], [Validators.required])
    });

    this.imagesAccomodationType = this.formBuilder.group({
      image: ['', Validators.required]
    });
  }

  stepperToCampSelection(){
    const adultLimit = this.basicAccomodationTypeDetails.get('adultLimit').value as unknown as number;
    const childLimit = this.basicAccomodationTypeDetails.get('childLimit').value as unknown as number;
    const maxLimit =  this.basicAccomodationTypeDetails.get('maxLimit').value as unknown as number;

    if (this.basicAccomodationTypeDetails.invalid){
      this.displayValidationError();
    }
    else if ( adultLimit + childLimit > maxLimit){
      this.displayMaximumLessThanSumError();
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
       this.displayCampNeeded();
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
          const selectedCamps = this.campsForAccomodationType.get('ListOfAssociatedCamp').value as Array<number>;
          const user = JSON.parse(localStorage.getItem('user'));

          const newAccommodationType = {
            AccTypeName: this.basicAccomodationTypeDetails.get('accomodationType').value,
            AccTypeDescription: this.basicAccomodationTypeDetails.get('accomodationTypeDescription').value,
            NumBeds: this.basicAccomodationTypeDetails.get('noOfBeds').value,
            NumBaths: this.basicAccomodationTypeDetails.get('noOfBaths').value,
            AdultLimit: this.basicAccomodationTypeDetails.get('adultLimit').value,
            ChildLimit: this.basicAccomodationTypeDetails.get('childLimit').value,
            MaxLimit: this.basicAccomodationTypeDetails.get('maxLimit').value,
            ListOfAssociatedCamp: selectedCamps,
            ListOfAccommodationTypeImages: this.viewImages,
            authenticateUser: user
          };

          const formData = new FormData();

          formData.append('AccTypeName', newAccommodationType.AccTypeName);
          formData.append('AccTypeDescription', newAccommodationType.AccTypeDescription);
          formData.append('NumBaths', newAccommodationType.NumBaths);
          formData.append('NumBeds', newAccommodationType.NumBeds);
          formData.append('ChildLimit', newAccommodationType.ChildLimit);
          formData.append('AdultLimit', newAccommodationType.AdultLimit);
          formData.append('MaxLimit', newAccommodationType.MaxLimit);
          formData.append('sessionID', user.SessionID);
          formData.append('userSecret', user.UserSecret);

          selectedCamps.forEach((el: any) => {
            formData.append('ListOfAssociatedCamp', el.CampID.toString());
          });

          this.viewImages.forEach((el: File, i) => {
            formData.append(`${i}`, el, el.name);
          });

          const arr = this.campsForAccomodationType.get('ListOfAssociatedCamp').value as Array<any>;

          this.accommodationTypeService.createAccommodationType(formData, this.globalService.GetServer());
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

  displayCampNeeded() {
    this.validationErrorSnackBar.open('Please select a camp this accommodation type.', 'OK', {
      duration: 2000,
    });
  }

  displayImageNeeded() {
    this.validationErrorSnackBar.open('Please upload images for this accommodation type.', 'OK', {
      duration: 2000,
    });
  }

  removeImage(img): void {
    const index = this.accomodationTypesImages.indexOf(img);
    this.accomodationTypesImages.splice(index, 1);
    this.viewImages.splice(index, 1);
  }

  selectFile(event): void {
    if (this.viewImages.length === 3){
      this.displayMaximumImageError();
    }
    else{
      if (event.target.files) {
        Array.from(event.target.files).forEach((file: File, i) => {
          this.viewImages.push(file);
          const reader = new FileReader();
          reader.readAsDataURL(event.target.files[i]);
          reader.onload = (events) => {
            this.accomodationTypesImages.push(reader.result);
          };
        });
      }
    }
  }

  displayMaximumImageError() {
    this.validationErrorSnackBar.open('A maximum of 3 images is allowed.', 'OK', {
      duration: 2000,
    });
  }

  displayMaximumLessThanSumError() {
    this.validationErrorSnackBar.open('The sum of the adult limit and child limit must be less than or equal to the maximum limit.', 'OK', {
      duration: 5000,
    });
  }
}
