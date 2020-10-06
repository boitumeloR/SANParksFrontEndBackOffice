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

  // Chart 
  totalChart: Chart;
  // Response
  parkName: any;
  companyInfo: any;
  grandTotal = 0;
  // Tables

  accommodationColumns: string[] = ['dateCreated', 'stayDates', 'dates', 'paidAmount'];
  activityColumns: string[] = ['dateCreated', 'dates', 'paidAmount'];
  accommodationData: any;
  activityData: any;
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
    this.avail.getCamps(park.ParkID, this.global.GetServer()).subscribe(res => this.camps = res);
  }

  GenerateChart(amounts: any[], camps: any[]) {
    if (this.totalChart) {
      this.totalChart.destroy();
    }

    this.totalChart = new Chart('#totalChart', {
      type: 'bar',
      data: {
        labels: camps,
        datasets: [
          {
            data: amounts
          }
        ]
      },
      options: {
        title: {
            display: true,
            text: 'Total Revenue Per Camp'
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
          CampID: this.CampID,
          Session: JSON.parse(localStorage.getItem('user'))
        };

        this.reportServ.GetWeeklyBookingReport(this.global.GetServer(), filterData).subscribe(res => {
          if (res.Session !== null) {
            console.log(res);
            this.accommodationData = res.AccommodationBookings;
            this.activityData = res.ActivityBookings;
            this.companyInfo = res.companyInfo;
            this.parkName = this.parks.find(zz => zz.ParkID === this.reportForm.get('park').value).ParkName;
            localStorage.setItem('user', JSON.stringify(res.Session));

            this.grandTotal += this.accommodationData.map(zz => zz.TotalPaid).reduce((acc, element) => acc + element);
            this.grandTotal += this.activityData.map(zz => zz.TotalPaid).reduce((acc, element) => acc + element);

            let campAmounts: any[] = [];
            let campNames: any[] = [];
            campAmounts = this.accommodationData.map(zz => zz.TotalPaid);
            campNames = this.accommodationData.map(zz => zz.CampName);

            this.GenerateChart(campAmounts, campNames);
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
}
