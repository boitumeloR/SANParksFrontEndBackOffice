import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfirmModalComponent } from 'src/app/modals/auxilliary-modals/confirm-modal/confirm-modal.component';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import { AvailabilityService } from 'src/app/services/Available/availability.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ReportingService } from 'src/app/services/Reports/reporting.service';
import { Chart} from 'chart.js';
import { SuccessModalComponent } from 'src/app/modals/auxilliary-modals/success-modal/success-modal.component';

@Component({
  selector: 'app-weekly-booking',
  templateUrl: './weekly-booking.component.html',
  styleUrls: ['./weekly-booking.component.scss']
})
export class WeeklyBookingComponent implements OnInit {


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
  // Response
  parkName: any;
  companyInfo: any;
  grandTotal = 0;
  // Tables

  accommodationColumns: string[] = ['dateCreated', 'stayDates', 'dates', 'paidAmount'];
  activityColumns: string[] = ['dateCreated', 'dates', 'paidAmount'];
  accommodationData: any[] = [];
  activityData: any[] = [];
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
            text: 'Total Activity Revenue Per Camp (R)'
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
            text: 'Total Accomodation Revenue Per Camp (R)'
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

        this.reportServ.GetWeeklyBookingReport(this.global.GetServer(), filterData).subscribe(res => {
          if (res.Session !== null) {

            this.generated = true;
            this.accommodationData = null;
            this.activityData = null;
            this.companyInfo = null;
            this.grandTotal = 0;
            console.log(res);
            this.accommodationData = res.AccommodationBookings;
            this.activityData = res.ActivityBookings;
            this.companyInfo = res.companyInfo;
            this.parkName = this.parks.find(zz => zz.ParkID === this.reportForm.get('park').value).ParkName;
            localStorage.setItem('user', JSON.stringify(res.Session));

            let campAmounts: any[] = [];
            let campNames: any[] = [];

            if (this.accommodationData.length > 0 ) {
              this.grandTotal += this.accommodationData.map(zz => zz.TotalPaid).reduce((acc, element) => acc + element);
              campAmounts = this.accommodationData.map(zz => zz.TotalPaid);
              campNames = this.accommodationData.map(zz => zz.CampName);
              this.GenerateChart(campAmounts, campNames);
            }
            else {
              this.totalChart.destroy();
            }
            if (this.activityData.length > 0) {
              this.grandTotal += this.activityData.map(zz => zz.TotalPaid).reduce((acc, element) => acc + element);
              campAmounts = this.activityData.map(zz => zz.TotalPaid);
              campNames = this.activityData.map(zz => zz.CampName);

              this.GenerateActivityChart(campAmounts, campNames);
            }
            else {
              this.actChart.destroy();
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

    const activityImage: string = activityGraph.toDataURL();
    const accommodationImage: string = accommodationGraph.toDataURL();

    console.log(activityImage);
    console.log(accommodationImage);
    const filterData = {
      StartDate: new Date(this.reportForm.get('start').value),
      EndDate: new Date(this.reportForm.get('end').value),
      ParkID: this.reportForm.get('park').value,
      CampID: this.reportForm.get('camp').value,
      Session: JSON.parse(localStorage.getItem('user')),
      graph1URL: accommodationImage,
      graph2URL: activityImage
    };

    this.reportServ.SendWeeklyBookingReport(this.global.GetServer(), filterData).subscribe(res => {
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
