import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CancelAlertComponent } from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { SuccessModalComponent } from 'src/app/modals/auxilliary-modals/success-modal/success-modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckInService } from 'src/app/services/CheckIn/check-in.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import { Router } from '@angular/router';
import { PayOptionModalComponent } from 'src/app/modals/auxilliary-modals/pay-option-modal/pay-option-modal.component';
import { Title } from '@angular/platform-browser';

const ELEMENT_DATA: any[] = [
  { name: 'Tumi', surname: 'Rampete', ID: '99999999999', age: 22, country: 'South Africa', paid: 'Yes'},
  { name: 'Jade', surname: 'Arumugam', ID: '99999999999', age: 22, country: 'South Africa', paid: 'No'},
  { name: 'Robyn', surname: 'Pillay', ID: '999999999999', age: 22, country: 'South Africa',  paid: 'Dependent'},
];
@Component({
  selector: 'app-pre-booked-check-in',
  templateUrl: './pre-booked-check-in.component.html',
  styleUrls: ['./pre-booked-check-in.component.scss']
})
export class PreBookedCheckInComponent implements OnInit {

  client: any;
  conservationFeePaid: boolean;
  conservationAmount = 0;
  hasWildcard = false;
  bookingForm: FormGroup;
  displayedColumns: string[] = ['name', 'surname', 'id', 'age', 'country'];
  dataSource = new MatTableDataSource();
  checkData: any;
  generated = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private fb: FormBuilder, private global: GlobalService,
              private checkServ: CheckInService, private router: Router, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Pre-Booked Check-In');
    this.bookingForm = this.fb.group({
      bookingID: [null, Validators.required]
    });
    this.dataSource.paginator = this.paginator;
  }

  SearchBooking() {
    const searchObj = {
      BookingID: this.bookingForm.get('bookingID').value,
      Session: JSON.parse(localStorage.getItem('user'))
    };

    this.checkServ.PreBookedBookings(this.global.GetServer(), searchObj).subscribe(res => {
      if (res.Session !== null) {
        if (res.Found === true) {
          localStorage.setItem('user', JSON.stringify(res.Session));
          this.checkData = res;
          this.dataSource = new MatTableDataSource(res.Guests);
          this.dataSource.paginator = this.paginator;
          this.conservationFeePaid = res.PaidConservationFee;
          this.conservationAmount = res.ConservationFeeAmount;
          this.hasWildcard = res.HasWildcard;
          this.generated = true;
        } else {
          localStorage.setItem('user', JSON.stringify(res.Session));
          const ref = this.dialog.open(ErrorModalComponent, {
            data: { errorMessage: 'Booking not found for today in this park, try a different reference number' }
          });
        }
      } else {
        const ref = this.dialog.open(ErrorModalComponent, {
          data: { errorMessage: 'Session Error, Login Again!' }
        });

        this.router.navigateByUrl('Login');
      }
    });
  }

  MakePayment() {
    const payment = this.dialog.open(PayOptionModalComponent, {
      disableClose: true
    });

    payment.afterClosed().subscribe(res => {
      if (res) {
        // Pay with card
      } else {
        // PayCash
      }
    });
  }

  Cancel() {
    const cancelDialog = this.dialog.open(CancelAlertComponent, {
      disableClose: true
    });
  }

  Submit() {
    const submitDialog = this.dialog.open(SuccessModalComponent, {
      disableClose: true,
      data: {successMessage: 'You have successfully checked in!'}
    });
  }

}
