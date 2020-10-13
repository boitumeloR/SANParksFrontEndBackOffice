import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AvailabilityService } from 'src/app/services/Available/availability.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { AddAdultGuestComponent } from '../add-adult-guest/add-adult-guest.component';

@Component({
  selector: 'app-add-arbitrary-guest',
  templateUrl: './add-arbitrary-guest.component.html',
  styleUrls: ['./add-arbitrary-guest.component.scss']
})
export class AddArbitraryGuestComponent implements OnInit {

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
      GuestAge: [null, Validators.compose([Validators.required, Validators.max(100)])],
      GuestIDCode: ['', Validators.compose([Validators.maxLength(20), Validators.required])]
    });
  }
  Cancel() {
    this.dialogRef.close({success: false, guest: null});
  }

  changeCountry(): void {
    console.log(this.guestInfo.value);
    if (this.guestInfo.get('CountryID').value === 1) {
      this.idLabelName = 'Identity Number';
    } else {
      this.idLabelName = 'Passport Number';
    }
  }

  validateGuestDOB(ID: string): boolean {

    // tslint:disable-next-line: no-construct
    const newID = new String(ID);
    console.log(newID.substring(0, 2));
    let year = '';
    if (Number(newID.substring(0, 2)) < 10) {
      year = `20${newID.substring(0, 2)}`;
    } else {
      year = `19${newID.substring(0, 2)}`;
    }

    const month = newID.substring(2, 4);
    const day = newID.substring(4, 6);
    if (Number(day) <= 31 && Number(month) <= 12 && Number(year) < new Date().getFullYear()) {
      return true;
    } else {
      return false;
    }
  }
  confirm() {
    // do stuff
    if (this.guestInfo.valid) {
      if (this.guestInfo.get('CountryID').value === 1) {
        // tslint:disable-next-line: ban-types
        const code: String = this.guestInfo.get('GuestIDCode').value;
        console.log(this.guestInfo.get('GuestIDCode').value,
         this.guestInfo.get('GuestIDCode').value.length);
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
