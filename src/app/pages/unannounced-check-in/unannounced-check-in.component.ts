import { AfterViewInit, Component, OnInit, resolveForwardRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CheckInService } from 'src/app/services/CheckIn/check-in.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import { Booking, DayVisitBooking, Guest } from 'src/app/services/Booking/booking.service';
import { AddArbitraryGuestComponent } from 'src/app/modals/guest/add-arbitrary-guest/add-arbitrary-guest.component';
import { UpdateArbitraryGuestComponent } from 'src/app/modals/guest/update-arbitrary-guest/update-arbitrary-guest.component';
import { ConfirmModalComponent } from 'src/app/modals/auxilliary-modals/confirm-modal/confirm-modal.component';
import { PayOptionModalComponent } from 'src/app/modals/auxilliary-modals/pay-option-modal/pay-option-modal.component';
import { SuccessModalComponent } from 'src/app/modals/auxilliary-modals/success-modal/success-modal.component';
import { QrCodeModalComponent } from 'src/app/modals/qr-code-modal/qr-code-modal.component';
import { resolveAny } from 'dns';

const ELEMENT_DATA: any[] = [
  { name: 'Tumi', surname: 'Rampete', ID: '99999999999', age: 22, country: 'South Africa'},
  { name: 'Jade', surname: 'Arumugam', ID: '99999999999', age: 22, country: 'South Africa'},
  { name: 'Robyn', surname: 'Pillay', ID: '999999999999', age: 22, country: 'South Africa'},
];

@Component({
  selector: 'app-unannounced-check-in',
  templateUrl: './unannounced-check-in.component.html',
  styleUrls: ['./unannounced-check-in.component.scss']
})
export class UnannouncedCheckInComponent implements OnInit, AfterViewInit {

  hasWildcard: boolean;
  booking: Booking;

  guests: Guest[] = [];
  ourDayVisit: DayVisitBooking = {
    Date: new Date(),
    ParkGateID: null,
    ParkGateName: null,
    ParkID: null,
    Guests: [],
    ParkName: null,
    Rate: 0
  };
  parkGates: any[];
  availableAmount: number;
  constructor(private dialog: MatDialog, private title: Title, private router: Router,
              private checkServ: CheckInService, private global: GlobalService) { }

  displayedColumns: string[] = ['name', 'surname', 'id', 'age', 'actions'];
  dataSource = new MatTableDataSource<Guest>(this.guests);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.booking = JSON.parse(localStorage.getItem('dayVisit'));
    this.ourDayVisit.Date = new Date();
    this.title.setTitle('Unannounced Check-In');

    const sess = JSON.parse(localStorage.getItem('user'));
    this.checkServ.GetParkGates(this.global.GetServer(), sess).subscribe(res => {
      if (res.Session) {
        localStorage.setItem('user', JSON.stringify(res.Session));
        this.parkGates = res.Gates;
      } else {
        this.router.navigateByUrl('Login');
        this.dialog.open(ErrorModalComponent, {
          data: {errorMessage: 'Session Error, login again.'}
        });
      }
    });
  }

  ngAfterViewInit() {
    this.checkServ.ClientHasWildcard(this.global.GetServer(), this.booking.ClientID)
      .subscribe(res => this.hasWildcard = res);
  }

  GateAvailability(parkGate: any) {
    this.ourDayVisit.ParkGateID = parkGate.ParkGateID;
    this.checkServ.CheckGateAvailability(this.global.GetServer(), parkGate.ParkGateID)
      .subscribe(res => {
        this.availableAmount = res.Available;
      });
  }

  UpdateGuest(guest: Guest) {
    const index = this.guests.findIndex(zz => zz === guest);

    const update =  this.dialog.open(UpdateArbitraryGuestComponent, {
      disableClose: true,
      data: { guest }
    });

    update.afterClosed().subscribe(res => {
      if (res.success) {
        this.guests[index] = res.guest;

        this.dataSource.data = this.guests;
      }
    });
  }

  DeleteGuest(guest: Guest) {
    const index = this.guests.findIndex(zz => zz === guest);
    const del =  this.dialog.open(ConfirmModalComponent, {
      disableClose: true,
      data: { confirmMessage: 'Are you sure that you want to remove this guest' }
    });

    del.afterClosed().subscribe(res => {
      if (res) {
        this.guests.splice(index, 1);
        this.dataSource.data = this.guests;
      }
    });
  }

  AddGuest() {
    const guest =  this.dialog.open(AddArbitraryGuestComponent, {
      disableClose: true
    });

    guest.afterClosed().subscribe(res => {
      if (res.success) {
        this.guests.push(res.guest);
        this.dataSource.data = this.guests;
        console.log(this.dataSource);
      }
    });
  }

  PayFirst() {
    this.ourDayVisit.Guests = [...this.guests];
    this.booking.DayVisits.push(this.ourDayVisit);
    this.booking.PaidConservationFee = true;
    this.checkServ.GetConservationFees(this.global.GetServer(), this.guests)
    .subscribe(res => {
      this.booking.ConservationAmount = res;

      const dlg = this.dialog.open(PayOptionModalComponent, {
        disableClose: true
      });

      dlg.afterClosed().subscribe(result => {
        if (result) {
          localStorage.setItem('unannouncedBooking', JSON.stringify(this.booking));
          this.router.navigateByUrl('payUnannounced');
        } else {
          const del = this.dialog.open(ConfirmModalComponent, {
            disableClose: true,
            data: {confirmMessage: `Was the amount ZAR${this.booking.ConservationAmount} paid in full?`}
          });

          del.afterClosed().subscribe(upd => {
            if (upd) {
              this.booking.Session = JSON.parse(localStorage.getItem('user'));

              this.checkServ.SavePaidCheckin(this.global.GetServer(), this.booking)
              .subscribe(checked => {
                if (checked.Session === null) {
                  localStorage.removeItem('user');
                  this.router.navigateByUrl('Login');
                } else {
                  if (checked.Success === true) {
                    localStorage.setItem('user', JSON.stringify(checked.Session));
                    const succ = this.dialog.open(SuccessModalComponent, {
                      disableClose: true,
                      data: {successMessage: `Check In Successfull!!`}
                    });
                    this.router.navigateByUrl('Home');

                    succ.afterClosed().subscribe(() => {
                      this.dialog.open(QrCodeModalComponent, {
                        data: { BookingID: checked.BookingID},
                        disableClose: false
                      });
                    });
                  } else {
                    localStorage.setItem('user', JSON.stringify(checked.Session));
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
    });
  }

  CheckIn() {
    this.ourDayVisit.Guests = [...this.guests];
    this.booking.DayVisits.push(this.ourDayVisit);
    this.booking.PaidConservationFee = true;
    this.booking.Session = JSON.parse(localStorage.getItem('user'));

    this.checkServ.SaveUnpaid(this.global.GetServer(), this.booking).subscribe(res => {
      if (res.Session == null) {
        localStorage.removeItem('user');
        this.router.navigateByUrl('Login');
      } else {
        if (res.Success === true) {
          localStorage.setItem('user', JSON.stringify(res.Session));
          const succ = this.dialog.open(SuccessModalComponent, {
            disableClose: true,
            data: {successMessage: `Check In Successfull!!`}
          });
          this.router.navigateByUrl('Home');

          succ.afterClosed().subscribe(() => {
            this.dialog.open(QrCodeModalComponent, {
              data: { BookingID: res.BookingID},
              disableClose: true
            });
          });
        } else {
          localStorage.setItem('user', JSON.stringify(res.Session));
          const err = this.dialog.open(ErrorModalComponent, {
            disableClose: false,
            data: {errorMessage: res.Message}
          });
        }
      }
    });
  }
}
