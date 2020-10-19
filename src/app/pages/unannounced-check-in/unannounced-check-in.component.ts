import { Component, OnInit, ViewChild } from '@angular/core';
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
export class UnannouncedCheckInComponent implements OnInit {

  booking: Booking;
  ourDayVisit: DayVisitBooking;
  parkGates: any[];
  availableAmount: number;
  constructor(private dialog: MatDialog, private title: Title, private router: Router,
              private checkServ: CheckInService, private global: GlobalService) { }

  displayedColumns: string[] = ['name', 'surname', 'id', 'age', 'actions'];
  dataSource: Guest[] = [];

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

  GateAvailability(parkGate: any) {
    this.checkServ.CheckGateAvailability(this.global.GetServer(), parkGate.ParkGateID)
      .subscribe(res => {
        this.availableAmount = res.Available;
      });
  }

  UpdateGuest(guest: Guest) {
    const index = this.dataSource.findIndex(zz => zz === guest);

    const update =  this.dialog.open(UpdateArbitraryGuestComponent, {
      disableClose: true,
      data: { guest }
    });

    update.afterClosed().subscribe(res => {
      if (res.success) {
        this.dataSource[index] = res.guest;
      }
    });
  }

  DeleteGuest(guest: Guest) {
    const index = this.dataSource.findIndex(zz => zz === guest);
    const del =  this.dialog.open(ConfirmModalComponent, {
      disableClose: true,
      data: { confirmMessage: 'Are you sure that you want to remove this guest' }
    });

    del.afterClosed().subscribe(res => {
      if (res) {
        this.dataSource.splice(index, 1);
      }
    });
  }

  AddGuest() {
    const guest =  this.dialog.open(AddArbitraryGuestComponent, {
      disableClose: true
    });

    guest.afterClosed().subscribe(res => {
      if (res.success) {
        this.dataSource.push(res.guest);
      }
    });
  }
}
