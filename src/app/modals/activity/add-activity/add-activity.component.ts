import { Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddActivityConfirmationComponent} from 'src/app/modals/activity/add-activity-confirmation/add-activity-confirmation.component';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { ActivityTypeService } from 'src/app/services/ActivityType/activity-type.service';
import { AccommodationTypeService } from 'src/app/services/AccommodationType/accommodation-type.service';
import { ActivityService } from 'src/app/services/Activity/activity.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ParkService } from 'src/app/services/Park/park.service';
@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  basicActivityDetails: FormGroup;
  campsAvailableAt: FormGroup;
  imagesForActivity: FormGroup;
  activityTypeDropDown;
  parkWithCamps;
  activityImages: any[] =  [];
  viewImages: File[] = [];
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddActivityComponent>, private activityTypeService: ActivityTypeService,
              private globalService: GlobalService, private parkService: ParkService,
              private activtyService: ActivityService) { }

  ngOnInit(): void {
    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkWithCamps = result.Parks;
      localStorage.setItem('user', JSON.stringify(result.user));

      this.activityTypeService.readActivityType(this.globalService.GetServer()).subscribe((resultActType: any) => {
      this.activityTypeDropDown = resultActType.ActivityTypes;
      localStorage.setItem('user', JSON.stringify(resultActType.user));
      });
    });

    this.basicActivityDetails = this.formBuilder.group({
      activityType: ['', Validators.required],
      activityDescription : ['', Validators.required],
      maximumCapacity : ['', [Validators.required, Validators.min(1)]],
      minimumAge : ['', [Validators.required, Validators.min(1)]],
      maximumAge : ['', [Validators.required, Validators.min(1)]]
    });

    this.campsAvailableAt = this.formBuilder.group({
      ListOfAssociatedCamp: this.formBuilder.array([], [Validators.required])
    });

    this.imagesForActivity = this.formBuilder.group({
      image: ['', Validators.required]
    });
  }

  stepperNext(){
    if (this.basicActivityDetails.invalid){
      this.displayValidationError();
    }
    else{
      this.myStepper.next();
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

  onChange(event) {
    const campsActivityAvailableAt =  this.campsAvailableAt.get('ListOfAssociatedCamp') as FormArray;

    if (event.checked) {
      campsActivityAvailableAt.push(new FormControl(event.source.value));
    }
    else {
      const i = campsActivityAvailableAt.controls.findIndex(x => x.value === event.source.value);
      campsActivityAvailableAt.removeAt(i);
    }
  }

  addActivity(){
    if (this.imagesForActivity.invalid){
      this.displayImageNeeded();
    }
    else{
    this.dialogRef.close();
    const addActivityConfirmationDialog = this.dialog.open(AddActivityConfirmationComponent);

    addActivityConfirmationDialog.afterClosed().subscribe(result => {
      if (result === true){
        const selectedCamps = this.campsAvailableAt.get('ListOfAssociatedCamp').value as Array<number>;
        const user = JSON.parse(localStorage.getItem('user'));

        const newActivity = {
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

        formData.append('activityType', newActivity.activityType);
        formData.append('activityDescription', newActivity.activityDescription);
        formData.append('maximumCapacity', newActivity.maximumCapacity);
        formData.append('minimumAge', newActivity.minimumAge);
        formData.append('maximumAge', newActivity.maximumAge);
        formData.append('sessionID', user.SessionID);
        formData.append('userSecret', user.UserSecret);

        selectedCamps.forEach((el: any) => {
          formData.append('ListOfAssociatedCamp', el.CampID.toString());
        });

        this.viewImages.forEach((el: File, i) => {
          formData.append(`${i}`, el, el.name);
        });

        this.activtyService.createActivity(formData, this.globalService.GetServer());
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
    this.validationErrorSnackBar.open('Please select a camp this activity.', 'OK', {
      duration: 2000,
    });
  }

  displayImageNeeded() {
    this.validationErrorSnackBar.open('Please upload images for this accomodation type.', 'OK', {
      duration: 2000,
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

  displayMaximumImageError() {
    this.validationErrorSnackBar.open('A maximum of 3 images is allowed.', 'OK', {
      duration: 2000,
    });
  }
}
