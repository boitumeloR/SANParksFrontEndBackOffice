import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateActivityConfirmationComponent} from 'src/app/modals/activity/update-activity-confirmation/update-activity-confirmation.component';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { ActivityService } from 'src/app/services/Activity/activity.service';
import { ParkService } from 'src/app/services/Park/park.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ActivityTypeService } from 'src/app/services/ActivityType/activity-type.service';
@Component({
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.scss']
})
export class UpdateActivityComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  basicActivityDetails: FormGroup;
  campsAvailableAt: FormGroup;
  imagesForActivity: FormGroup;
  activityImages = [];
  viewImages: File[] = [];
  activity;
  parkWithCamps;
  activityTypeDropDown;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateActivityComponent>, private activityService: ActivityService,
              private parkService: ParkService, private globalService: GlobalService, private activityTypeService: ActivityTypeService) { }

  ngOnInit(): void {
    this.activity = JSON.parse(localStorage.getItem('activity'));

    this.activity.ListOfImages.forEach(element => {
      this.activityImages.push('data:image/png;base64,' + element.ImageInBase64);
      this.viewImages.push(element.ImageInBase64);
    });

    this.activityTypeService.readActivityType(this.globalService.GetServer()).subscribe((result: any) => {
      this.activityTypeDropDown = result.ActivityTypes;

      this.parkService.ReadPark(this.globalService.GetServer()).subscribe((resultPark: any) => {
      this.parkWithCamps = resultPark.Parks;
    });
    });

    this.basicActivityDetails = this.formBuilder.group({
      activityType: [this.activity.ActivityTypeID, Validators.required],
      activityDescription : [this.activity.ActivityDescription, Validators.required],
      maximumCapacity : [this.activity.ActivityMaxCapacity, [Validators.required, Validators.min(1)]],
      minimumAge : [this.activity.AgeMin, [Validators.required, Validators.min(1)]],
      maximumAge : [this.activity.AgeMax, [Validators.required, Validators.min(1)]]
    });

    this.campsAvailableAt = this.formBuilder.group({
      ListOfAssociatedCamp: this.formBuilder.array([], [Validators.required])
    });

    this.imagesForActivity = this.formBuilder.group({
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

  stepperNext(){
    if (this.basicActivityDetails.invalid){
      this.displayValidationError();
    }
    else{
      this.myStepper.next();
    }
  }

  onChange(event) {
    const campsAvailableAt =  this.campsAvailableAt.get('ListOfAssociatedCamp') as FormArray;

    if (event.checked) {
      campsAvailableAt.push(new FormControl(event.source.value));
    }
    else {
      const i = campsAvailableAt.controls.findIndex(x => x.value === event.source.value);
      campsAvailableAt.removeAt(i);
    }
  }

  stepperToImageSelection(){
    if (this.campsAvailableAt.invalid){
       this.displayCampNeeded();
     }
     else{
      this.myStepper.next();
     }
   }

  updateActivity(){
    if (this.viewImages.length === 0 ){
      this.displayImageNeeded();
    }
    else{
    this.dialogRef.close();
    const updateActivityConfirmationDialog = this.dialog.open(UpdateActivityConfirmationComponent);

    updateActivityConfirmationDialog.afterClosed().subscribe(result => {
      if (result === true){
        const selectedCamps = this.campsAvailableAt.get('ListOfAssociatedCamp').value as Array<number>;
        const user = JSON.parse(localStorage.getItem('user'));

        const updatedActivity = {
          activityID: this.activity.ActivityID,
          activityType: this.basicActivityDetails.get('activityType').value,
          activityDescription: this.basicActivityDetails.get('activityDescription').value,
          maximumCapacity: this.basicActivityDetails.get('maximumCapacity').value,
          minimumAge: this.basicActivityDetails.get('minimumAge').value,
          maximumAge: this.basicActivityDetails.get('maximumAge').value,
          ListOfAssociatedCamp: selectedCamps,
          ListOfAccommodationTypeImages: this.viewImages,
          authenticateUser: user
        };

        const formData = new FormData();

        formData.append('activityID', updatedActivity.activityID);
        formData.append('activityType', updatedActivity.activityType);
        formData.append('activityDescription', updatedActivity.activityDescription);
        formData.append('maximumCapacity', updatedActivity.maximumCapacity);
        formData.append('minimumAge', updatedActivity.minimumAge);
        formData.append('maximumAge', updatedActivity.maximumAge);
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
            formData.append(`${i}`, this.b64toBlob(el), 'activityImage');
          }
        });

        this.activityService.updateActivity(formData, this.globalService.GetServer());
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

  removeImage(img): void {
    const index = this.activityImages.indexOf(img);
    this.activityImages.splice(index, 1);
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
            this.activityImages.push(reader.result);
          };
        });
      }
    }
  }

  displayCampNeeded() {
    this.validationErrorSnackBar.open('Please select a camp this activity.', 'OK', {
      duration: 2000,
    });
  }

  displayMaximumImageError() {
    this.validationErrorSnackBar.open('A maximum of 3 images is allowed.', 'OK', {
      duration: 2000,
    });
  }

  displayImageNeeded() {
    this.validationErrorSnackBar.open('Please upload images for this accomodation type.', 'OK', {
      duration: 2000,
    });
  }
}
