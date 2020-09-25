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
  viewImages: File[] = [];
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

    this.accommodationType.ListOfImages.forEach(element => {
      this.accomodationTypesImages.push('data:image/png;base64,' + element.ImageInBase64);
      this.viewImages.push(element.ImageInBase64);
    });

    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkWithCamps = result.Parks;
      localStorage.setItem('user', JSON.stringify(result.user));
    });

    this.basicUpdateAccomodationTypeDetails = this.formBuilder.group({
      accomodationType: [this.accommodationType.AccTypeName, Validators.required],
      accomodationTypeDescription: [this.accommodationType.AccTypeDescription, Validators.required],
      noOfBeds : [this.accommodationType.NumBeds, [Validators.required, Validators.min(0)]],
      noOfBaths : [this.accommodationType.NumBaths, [Validators.required, Validators.min(0)]],
      adultLimit : [this.accommodationType.AdultLimit, [Validators.required, Validators.min(0)]],
      childLimit : [this.accommodationType.ChildLimit, [Validators.required, Validators.min(0)]],
      maxLimit : [this.accommodationType.MaxLimit, [Validators.required, Validators.min(0)]]
    });

    this.campsForAccomodationType = this.formBuilder.group({
        ListOfAssociatedCamp: this.formBuilder.array([], [Validators.required])
    });

    this.imagesAccomodationType = this.formBuilder.group({
      image: ['', Validators.required]
    });
  }

   b64toBlob(dataURI) {
    const dataWithPrefix = 'data:image/png;base64,' + dataURI;
    const byteString = atob(dataWithPrefix.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/png' });
  }

  updateAccomodationType(){
    if (this.viewImages.length === 0){
      this.displayImageNeeded();
    }
    else{
      this.dialogRef.close();
      const updateAccomodationTypeConfirmationDialog = this.dialog.open(UpdateAccomodationTypeConfirmationComponent);

      updateAccomodationTypeConfirmationDialog.afterClosed().subscribe(result => {
        if (result === true){
          const selectedCamps = this.campsForAccomodationType.get('ListOfAssociatedCamp').value as Array<number>;
          const user = JSON.parse(localStorage.getItem('user'));

          const updateAccommodationType = {
            AccommodationTypeID: this.accommodationType.AccommodationTypeID,
            AccTypeName: this.basicUpdateAccomodationTypeDetails.get('accomodationType').value,
            AccTypeDescription: this.basicUpdateAccomodationTypeDetails.get('accomodationTypeDescription').value,
            NumBeds: this.basicUpdateAccomodationTypeDetails.get('noOfBeds').value,
            NumBaths: this.basicUpdateAccomodationTypeDetails.get('noOfBaths').value,
            AdultLimit: this.basicUpdateAccomodationTypeDetails.get('adultLimit').value,
            ChildLimit: this.basicUpdateAccomodationTypeDetails.get('childLimit').value,
            MaxLimit: this.basicUpdateAccomodationTypeDetails.get('maxLimit').value,
            ListOfAssociatedCamp: selectedCamps,
            ListOfAccommodationTypeImages: this.viewImages,
            authenticateUser: user
          };

          const formData = new FormData();
          formData.append('AccommodationTypeID', updateAccommodationType.AccommodationTypeID);
          formData.append('AccTypeName', updateAccommodationType.AccTypeName);
          formData.append('AccTypeDescription', updateAccommodationType.AccTypeDescription);
          formData.append('NumBaths', updateAccommodationType.NumBaths);
          formData.append('NumBeds', updateAccommodationType.NumBeds);
          formData.append('ChildLimit', updateAccommodationType.ChildLimit);
          formData.append('AdultLimit', updateAccommodationType.AdultLimit);
          formData.append('MaxLimit', updateAccommodationType.MaxLimit);
          formData.append('sessionID', user.SessionID);
          formData.append('userSecret', user.UserSecret);

          selectedCamps.forEach((el: any) => {
            formData.append('ListOfAssociatedCamp', el.CampID.toString());
          });

          this.viewImages.forEach((el: File, i) => {
            if (el instanceof Blob){
              formData.append(`${i}`, el, el.name);
            }
            else{
              formData.append(`${i}`, this.b64toBlob(el), 'accTypeImage');
            }
          });

          this.accommodationTypeService.updateAccommodationType(formData, this.globalService.GetServer());
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
    const adultLimit = this.basicUpdateAccomodationTypeDetails.get('adultLimit').value as unknown as number;
    const childLimit = this.basicUpdateAccomodationTypeDetails.get('childLimit').value as unknown as number;
    const maxLimit =  this.basicUpdateAccomodationTypeDetails.get('maxLimit').value as unknown as number;

    if (this.basicUpdateAccomodationTypeDetails.invalid){
       this.displayValidationError();
     }
     else if ( adultLimit + childLimit > maxLimit){
       this.displayMaximumLessThanSumError();
     }
     else{
       this.myStepper.next();
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

  onLoadCheck(){
    this.accommodationType.CampsAvailableAt.forEach(element => {
      const thisCampCheckbox = (document.getElementById(element.CampID) as HTMLInputElement);
      thisCampCheckbox.checked = true;
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
      duration: 2000,
    });
  }
}
