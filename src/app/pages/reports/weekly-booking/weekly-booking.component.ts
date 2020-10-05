import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmModalComponent } from 'src/app/modals/auxilliary-modals/confirm-modal/confirm-modal.component';
import { AvailabilityService } from 'src/app/services/Available/availability.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ReportingService } from 'src/app/services/Reports/reporting.service';

@Component({
  selector: 'app-weekly-booking',
  templateUrl: './weekly-booking.component.html',
  styleUrls: ['./weekly-booking.component.scss']
})
export class WeeklyBookingComponent implements OnInit {


  parks: any;
  camps: any;
  CampID: any;
  constructor(private dialog: MatDialog, private snack: MatSnackBar,
              private global: GlobalService, private reportServ: ReportingService,
              private avail: AvailabilityService) { }

  ngOnInit(): void {
    this.avail.getDropDowns(this.global.GetServer()).subscribe(result => this.parks = result.Parks);
  }

  GetCamps(park: any) {
    this.avail.getCamps(park.ParkID, this.global.GetServer()).subscribe(res => this.camps = res);
  }
  Submit() {
    const ref = this.dialog.open(ConfirmModalComponent, {
      data: {confirmMessage: 'Invalid dates, choose different dates'}
    });
  }
}
