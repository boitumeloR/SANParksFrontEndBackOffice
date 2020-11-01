import { Component, OnInit, ViewChild } from '@angular/core';
import { SuccessModalComponent } from 'src/app/modals/auxilliary-modals/success-modal/success-modal.component';
import { CancelAlertComponent } from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmModalComponent } from 'src/app/modals/auxilliary-modals/confirm-modal/confirm-modal.component';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import { PayOptionModalComponent } from 'src/app/modals/auxilliary-modals/pay-option-modal/pay-option-modal.component';
import { CheckInService } from 'src/app/services/CheckIn/check-in.service';
import { GlobalService } from 'src/app/services/Global/global.service';
const ELEMENT_DATA: any[] = [
  { name: 'Tumi', surname: 'Rampete', ID: '99999999999', age: 22, country: 'South Africa', paid: true},
  { name: 'Jade', surname: 'Arumugam', ID: '99999999999', age: 22, country: 'South Africa', paid: true},
  { name: 'Robyn', surname: 'Pillay', ID: '999999999999', age: 22, country: 'South Africa',  paid: false},
];

@Component({
  selector: 'app-checkout-park',
  templateUrl: './checkout-park.component.html',
  styleUrls: ['./checkout-park.component.scss']
})
export class CheckoutParkComponent implements OnInit {
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

    this.checkServ.CheckoutSearch(this.global.GetServer(), searchObj).subscribe(res => {
      if (res.Session !== null) {
        if (res.Found === true) {
          localStorage.setItem('user', JSON.stringify(res.Session));
          this.checkData = res;
          this.client = res.Client;
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
        localStorage.setItem('payAmount', JSON.stringify({amount: this.conservationAmount, BookingID: this.checkData.BookingID}));
        this.router.navigateByUrl('payConservationFee');
      } else {
        const dlg = this.dialog.open(ConfirmModalComponent, {
          disableClose: true,
          data: {confirmMessage: `Was the amount ZAR${this.conservationAmount} paid in full?`}
        });

        dlg.afterClosed().subscribe(result => {
          if (result) {
            const check = {
              Session: JSON.parse(localStorage.getItem('user')),
              BookingID: this.checkData.BookingID
            };
            this.checkServ.PreBookedCheckin(this.global.GetServer(), check)
              .subscribe(checked => {
                if (checked.Session == null) {
                  this.router.navigateByUrl('Login');
                  const err = this.dialog.open(ErrorModalComponent, {
                    disableClose: true,
                    data: {errorMessage: `Session Errror, Login Again`}
                  });
                } else {
                  if (checked.Success === true) {
                    localStorage.setItem('user', JSON.stringify(checked.Session));
                    this.router.navigateByUrl('Home');
                    const err = this.dialog.open(SuccessModalComponent, {
                      disableClose: true,
                      data: {successMessage: `Successfully Checked in. Welcome the client.`}
                    });
                  } else {
                    const err = this.dialog.open(ErrorModalComponent, {
                      disableClose: true,
                      data: {errorMessage: checked.Message}
                    });
                  }
                }
              });
          }
        });
      }
    });
  }

  Cancel() {
    const cancelDialog = this.dialog.open(CancelAlertComponent, {
      disableClose: true
    });
  }

  Submit() {
    const check = {
      Session: JSON.parse(localStorage.getItem('user')),
      BookingID: this.checkData.BookingID
    };
    this.checkServ.CheckoutPark(this.global.GetServer(), check)
    .subscribe(checked => {
      if (checked.Session == null) {
        this.router.navigateByUrl('Login');
        const err = this.dialog.open(ErrorModalComponent, {
          disableClose: true,
          data: {errorMessage: `Session Errror, Login Again`}
        });
      } else {
        localStorage.setItem('user', JSON.stringify(checked.Session));
        if (checked.Success === true) {
          this.router.navigateByUrl('Home');
          const err = this.dialog.open(SuccessModalComponent, {
            disableClose: true,
            data: {successMessage: `Successfully Checked out. Client may leave theough the park gate.`}
          });
        } else {
          const err = this.dialog.open(ErrorModalComponent, {
            disableClose: true,
            data: {errorMessage: checked.Message}
          });
        }
      }
    });
  }
}
