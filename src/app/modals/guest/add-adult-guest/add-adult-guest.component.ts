import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AvailabilityService } from 'src/app/services/Available/availability.service';
import { BookingService } from 'src/app/services/Booking/booking.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { LoginService } from 'src/app/services/Login/login.service';

@Component({
  selector: 'app-add-adult-guest',
  templateUrl: './add-adult-guest.component.html',
  styleUrls: ['./add-adult-guest.component.scss']
})
export class AddAdultGuestComponent implements OnInit {

  calcAge = 0;
  countries: any;
  guestInfo: FormGroup;
  httpError = false;
  httpMessage = '';
  idLabelName = 'Identity Number';
  public event: EventEmitter<any> = new EventEmitter<any>();
  constructor(private dialogRef: MatDialogRef<AddAdultGuestComponent>, private snack: MatSnackBar,
              private formBuilder: FormBuilder, private countryServ: AvailabilityService,
              private global: GlobalService) { }

  ngOnInit(): void {

    this.countryServ.GetCountries(this.global.GetServer()).subscribe(res => {
      this.countries = res;
    });
    this.guestInfo = this.formBuilder.group({
      CountryID: [1, Validators.required],
      GuestName: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      GuestSurname: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      GuestAge: [null, Validators.compose([Validators.required, Validators.min(13), Validators.max(100)])],
      GuestIDCode: ['', Validators.compose([Validators.maxLength(20), Validators.required])]
    });

    this.guestInfo.get('GuestAge').disable();
  }
  Cancel() {
    this.dialogRef.close({success: false, guest: null});
  }

  changeCountry(): void {
    console.log(this.guestInfo.value);
    if (this.guestInfo.get('CountryID').value === '1' || this.guestInfo.get('CountryID').value === 1) {
      this.idLabelName = 'Identity Number';
      this.guestInfo.get('GuestAge').disable();
    } else {
      this.idLabelName = 'Passport Number';
      this.guestInfo.get('GuestAge').enable();
    }
  }

  validateGuestDOB(ID: string): boolean {
    let year = '';
    if (Number(ID.substring(0, 2)) < 10) {
      year = `20${ID.substring(0, 2)}`;
    } else {
      year = `19${ID.substring(0, 2)}`;
    }

    const month = ID.substring(2, 4);
    const day = ID.substring(4, 6);

    if (Number(day) <= 31 && Number(month) <= 12 && Number(year) < new Date().getFullYear()) {
      if (this.calculateAge(Number(year), Number(month), Number(day))) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  calculateAge(year: number, month: number, day: number): boolean {
    this.calcAge = 0;
    const today = new Date();

    this.calcAge = today.getFullYear() - year;
    this.calcAge --;
    if (today.getMonth() > month) {
      this.calcAge++;
    } else if (today.getMonth() === month) {
      if (today.getDay() >= day) {
        this.calcAge++;
      }
    }

    this.guestInfo.get('GuestAge').enable();
    this.guestInfo.get('GuestAge').setValue(this.calcAge);
    if (this.guestInfo.get('GuestAge').valid) {
      return true;
    } else  {
      this.guestInfo.get('GuestAge').disable();
      return false;
    }
  }



  confirm() {
    // do stuff
    if (this.guestInfo.valid) {
      if (this.guestInfo.get('CountryID').value === 1 || this.guestInfo.get('CountryID').value === '1') {
        const code: string = this.guestInfo.get('GuestIDCode').value;
        if (code.length === 13 && this.validateGuestDOB(this.guestInfo.get('GuestIDCode').value)) {
          console.log(this.guestInfo.value);
          this.snack.open('Successfuly added Guest', 'Okay', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 500
          });
          this.close({success: true, guest: this.guestInfo.value});

        } else {
          this.httpError = true;
          this.httpMessage = 'Enter an appropriate ID number.';
        }
      } else {
        // Carry on, not south african.
        console.log(this.guestInfo.value);
        this.snack.open('Successfuly added Guest', 'Okay', {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 500
        });

        this.event.emit(this.guestInfo.value);
        this.close({success: true, guest: this.guestInfo.value});
      }
    } else {
      this.httpError = true;
      this.httpMessage = 'Enter information in the correct format.';
    }
  }

  resetHttp() {
    this.httpError = false;
    this.httpMessage = '';
  }

  close(result) {
    this.dialogRef.close(result);
  }

}
