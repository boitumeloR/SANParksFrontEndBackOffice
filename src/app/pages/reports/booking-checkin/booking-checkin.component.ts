import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as Chart from 'chart.js';
import { ConfirmModalComponent } from 'src/app/modals/auxilliary-modals/confirm-modal/confirm-modal.component';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import { SuccessModalComponent } from 'src/app/modals/auxilliary-modals/success-modal/success-modal.component';
import { AvailabilityService } from 'src/app/services/Available/availability.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ReportingService } from 'src/app/services/Reports/reporting.service';

@Component({
  selector: 'app-booking-checkin',
  templateUrl: './booking-checkin.component.html',
  styleUrls: ['./booking-checkin.component.scss']
})
export class BookingCheckinComponent implements OnInit {
  reportForm: FormGroup;
  parks: any;
  camps: any;
  CampID = null;
  startDate: Date;
  endDate: Date;

  // State
  generated = false;
  // Chart
  totalChart: Chart;
  actChart: Chart;
  dayChart: Chart;
  // Response
  parkName: any;
  companyInfo: any;
  grandTotal = 0;
  // Tables

  accommodationColumns: string[] = ['dateCreated', 'bookingDate', 'checkInDate', 'checkType'];
  activityColumns: string[] = ['dateCreated', 'bookingDate', 'checkInDate', 'checkType'];
  dayColumns: string[] = ['dateCreated', 'bookingDate', 'checkInDate', 'checkType'];
  accommodationData: any[] = [];
  activityData: any[] = [];
  dayData: any[] = [];
  constructor(private dialog: MatDialog, private snack: MatSnackBar,
              private global: GlobalService, private reportServ: ReportingService,
              private avail: AvailabilityService, private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.reportForm = this.fb.group({
      park: [null, Validators.required],
      camp: [null],
      start: [null, Validators.required],
      end: [null, Validators.required]
    });
    this.avail.getDropDowns(this.global.GetServer()).subscribe(result => this.parks = result.Parks);
  }

  GetCamps(park: any) {
    this.reportForm.get('camp').reset();
    this.avail.getCamps(park.ParkID, this.global.GetServer()).subscribe(res => this.camps = res);
  }

  GenerateDayChart(amounts: any[], camps: any[]) {
    if (this.dayChart) {
      this.dayChart.destroy();
    }

    this.actChart = new Chart('dayChart', {
      type: 'pie',
      data: {
        labels: camps,
        datasets: [
          {
            backgroundColor: [
              'rgb(153,153,255)',
              'rgb(255,153,238)',
              'rgb(255,204,179)'
            ],
            data: amounts
          }
        ]
      },
      options: {
        title: {
            display: true,
            text: 'Day Visit Bookings And Check In'
        },
        legend: {
          display: true,
          labels: {
              fontColor: 'rgb(255, 99, 132)'
          }
        }
    }
    });
  }
  GenerateActivityChart(amounts: any[], camps: any[]) {
    if (this.actChart) {
      this.actChart.destroy();
    }

    this.actChart = new Chart('actChart', {
      type: 'pie',
      data: {
        labels: camps,
        datasets: [
          {
            backgroundColor: [
              'rgb(153,153,255)',
              'rgb(255,153,238)',
              'rgb(255,204,179)'
            ],
            data: amounts
          }
        ]
      },
      options: {
        title: {
            display: true,
            text: 'Activity Bookings And Check In'
        },
        legend: {
          display: true,
          labels: {
              fontColor: 'rgb(255, 99, 132)'
          }
        }
    }
    });
  }
  GenerateChart(amounts: any[], camps: any[]) {
    if (this.totalChart) {
      this.totalChart.destroy();
    }

    this.totalChart = new Chart('totalChart', {
      type: 'pie',
      data: {
        labels: camps,
        datasets: [
          {
            backgroundColor: [
              'rgb(153,153,255)',
              'rgb(255,153,238)',
              'rgb(255,204,179)'
            ],
            data: amounts
          }
        ]
      },
      options: {
        title: {
            display: true,
            text: 'Accommodation Bookings And Check In'
        },
        legend: {
          display: true,
          labels: {
              fontColor: 'rgb(255, 99, 132)'
          }
        }
    }
    });
  }
  Submit() {
    if (this.reportForm.valid) {
      if (new Date(this.reportForm.get('start').value) >= new Date(this.reportForm.get('end').value)) {
        const ref = this.dialog.open(ErrorModalComponent, {
          data: {errorMessage: 'Invalid dates, choose different dates'}
        });
      } else {
        console.log(this.reportForm.value);

        const filterData = {
          StartDate: new Date(this.reportForm.get('start').value),
          EndDate: new Date(this.reportForm.get('end').value),
          ParkID: this.reportForm.get('park').value,
          CampID: this.reportForm.get('camp').value,
          Session: JSON.parse(localStorage.getItem('user'))
        };

        this.reportServ.GetBookingCheckinReport(this.global.GetServer(), filterData).subscribe(res => {
          if (res.Session !== null) {

            this.generated = true;
            this.accommodationData = null;
            this.activityData = null;
            this.companyInfo = null;
            this.grandTotal = 0;
            console.log(res);
            this.accommodationData = res.AccommodationCheckIns;
            this.activityData = res.ActivityCheckIns;
            this.dayData = res.DayVisitCheckIns;
            this.companyInfo = res.companyInfo;
            this.parkName = this.parks.find(zz => zz.ParkID === this.reportForm.get('park').value).ParkName;
            localStorage.setItem('user', JSON.stringify(res.Session));

            const checkInLabels: any[] = ['Bookings Made', 'No Show', 'Late', 'On Time'];

            if (this.accommodationData.length > 0 ) {

              const accChart = [res.AccommodationBookingsMade, res.AccommodationNoShows, res.AccommodationOnTime,
              res.AccommodationLate];
              this.GenerateChart(accChart, checkInLabels);
            }
            else {
              this.totalChart.destroy();
            }
            if (this.activityData.length > 0) {

              const actChart = [res.ActivityBookingsMade, res.ActivityNoShows, res.ActivityOnTime,
                res.ActivityLate];
              this.GenerateActivityChart(actChart, checkInLabels);
            }
            else {
              this.actChart.destroy();
            }

            if (this.dayData.length > 0) {

              const dayChart = [res.DayVisitBookingsMade, res.DayVisitNoShows, res.DayVisitOnTime,
                res.DayVisitLate];
              this.GenerateDayChart(dayChart, checkInLabels);
            }
            else {
              this.dayChart.destroy();
            }
          } else {
            const ref = this.dialog.open(ErrorModalComponent, {
              data: { errorMessage: 'Session Timeout, Login Again!' }
            });

            this.router.navigateByUrl('Login');
          }
        });
      }
    }
  }

  SendReport() {
    const activityGraph: HTMLCanvasElement = document.querySelector('#actChart') as HTMLCanvasElement;
    const accommodationGraph: HTMLCanvasElement = document.querySelector('#totalChart') as HTMLCanvasElement;
    const dayGraph: HTMLCanvasElement = document.querySelector('#dayChart') as HTMLCanvasElement;

    const activityImage: string = activityGraph.toDataURL();
    const accommodationImage: string = accommodationGraph.toDataURL();
    const dayImage: string  = dayGraph.toDataURL();

    console.log(activityImage);
    console.log(accommodationImage);
    const filterData = {
      StartDate: new Date(this.reportForm.get('start').value),
      EndDate: new Date(this.reportForm.get('end').value),
      ParkID: this.reportForm.get('park').value,
      CampID: this.reportForm.get('camp').value,
      Session: JSON.parse(localStorage.getItem('user')),
      graph1URL: accommodationImage,
      graph2URL: activityImage,
      graph3URL: dayImage
    };

    this.reportServ.SendBookingCheckinReport(this.global.GetServer(), filterData).subscribe(res => {
      if (res.Session) {
        if (res.Success === true) {
          localStorage.setItem('user', JSON.stringify(res.Session));
          this.dialog.open(SuccessModalComponent, {
            data: { successMessage: 'PDF Report successfully sent to Manager!'}
          });
        } else {
          localStorage.setItem('user', JSON.stringify(res.Session));
          const ref = this.dialog.open(ErrorModalComponent, {
            data: { errorMessage: 'An error occured, plesse try again' }
          });
        }
      } else {
        const ref = this.dialog.open(ErrorModalComponent, {
          data: { errorMessage: 'Session Timeout, Login Again!' }
        });
        this.router.navigateByUrl('Login');
      }
    });
  }

}
