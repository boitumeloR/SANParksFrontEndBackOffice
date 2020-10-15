import { AfterViewInit, Component, OnInit, ViewChildren } from '@angular/core';
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
import { Title } from '@angular/platform-browser';
export interface WildcardChart {
  barChart: Chart;
  ClusterName: string;
  Values: any[];
  Categories: any [];
}
@Component({
  selector: 'app-wildcard-report',
  templateUrl: './wildcard-report.component.html',
  styleUrls: ['./wildcard-report.component.scss']
})
export class WildcardReportComponent implements OnInit, AfterViewInit {
  reportForm: FormGroup;
  parks: any;
  camps: any;
  CampID = null;
  startDate: Date;
  endDate: Date;

  // State
  generated = false;
  firstGen =  0;
  // Chart
  totalChart: Chart;
  actChart: Chart;

  clusterCharts: WildcardChart[] = [];
  // Response
  initClusters: any;
  parkName: any;
  companyInfo: any;
  grandTotal = 0;
  // Tables
  accommodationColumns: string[] = ['dateCreated', 'stayDates', 'dates', 'paidAmount'];
  activityColumns: string[] = ['dateCreated', 'dates', 'paidAmount'];
  clusterData: any[] = [];
  @ViewChildren('yourId') myCharts: any;
  constructor(private dialog: MatDialog, private snack: MatSnackBar,
              private global: GlobalService, private reportServ: ReportingService,
              private avail: AvailabilityService, private fb: FormBuilder,
              private router: Router, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Wildcard Membership Report');
    this.reportServ.GetClusters(this.global.GetServer()).subscribe(res => {
      this.initClusters = res;
      console.log(this.initClusters);
    });
    this.reportForm = this.fb.group({
      start: [null, Validators.required],
      end: [null, Validators.required]
    });
    this.avail.getDropDowns(this.global.GetServer()).subscribe(result => this.parks = result.Parks);
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
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

  MapChart(categories, values, clusterName, chartNumber): WildcardChart {
    let returnChart: Chart;

    returnChart = new Chart(`canvas${chartNumber}`, {
      type: 'bar',
      data: {
        labels: categories,
        datasets: [
          {
            backgroundColor: [
              'rgb(153,153,255)',
              'rgb(255,153,238)',
              'rgb(255,204,179)'
            ],
            data: values
          }
        ]
      },
      options: {
        title: {
            display: true,
            text: `Wildcard Purchases for Wildcard Cluster: ${clusterName}`
        },
        legend: {
          display: true,
          labels: {
              fontColor: 'rgb(255, 99, 132)'
          }
        }
    }
    });

    const toReturn: WildcardChart = {
      barChart: returnChart,
      ClusterName: clusterName,
      Values: values,
      Categories: categories
    };
    return toReturn;
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
          ParkID: null,
          CampID: null,
          Session: JSON.parse(localStorage.getItem('user'))
        };

        this.reportServ.GetWildcardReport(this.global.GetServer(), filterData).subscribe(res => {
          if (res.Session !== null) {

            this.generated = true;
            this.firstGen++;
            this.companyInfo = null;
            this.grandTotal = 0;
            console.log(res);
            this.clusterData = res.Wildcards;
            localStorage.setItem('user', JSON.stringify(res.Session));

            const clusters: any[] = this.clusterData.map(zz => zz.ClusterName);
            this.clusterCharts = [];
            this.clusterData.forEach((element, i) => {
              const categories = ['Individual', 'Couple', 'Family'];
              const values = [element.IndividualCount, element.CoupleCount, element.FamilyCount];
              this.clusterCharts.push(this.MapChart(categories, values, element.ClusterName, i));
            });

            const canvasCharts = this.myCharts._results;  // Get array with all canvas
            canvasCharts.map((myCanvas, j) => {   // For each canvas, save the chart on the charts array
              this.clusterCharts[j].barChart.destroy();
              this.clusterCharts[j].barChart = new Chart(myCanvas.nativeElement.id, {
                type: 'bar',
                data: {
                  labels: this.clusterCharts[j].Categories,
                  datasets: [
                    {
                      backgroundColor: [
                        'rgb(153,153,255)',
                        'rgb(255,153,238)',
                        'rgb(255,204,179)'
                      ],
                      data: this.clusterCharts[j].Values
                    }
                  ]
                },
                options: {
                  title: {
                      display: true,
                      text: `Wildcard Purchases for Wildcard Cluster: ${this.clusterCharts[j].ClusterName}`
                  },
                  legend: {
                    display: false,
                    labels: {
                        fontColor: 'rgb(255, 99, 132)'
                    }
                  }
              }
               });
            });

            // if (this.firstGen > 1) {
            //   this.clusterCharts.splice((this.clusterCharts.length / (2 * this.firstGen)),
            //   this.firstGen * ((this.clusterCharts.length / (2 * this.firstGen))));
            // }
            console.log(this.clusterCharts);
            console.log(this.myCharts);
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

    const wildCardPDF = [];
    this.clusterCharts.forEach((el, i) => {
      const cv: HTMLCanvasElement = document.querySelector(`#canvas${i}`) as HTMLCanvasElement;
      wildCardPDF.push({
        ImageURL: cv.toDataURL(),
        Cluster: el.ClusterName
      });
    });

    const filterData = {
      StartDate: new Date(this.reportForm.get('start').value),
      EndDate: new Date(this.reportForm.get('end').value),
      Session: JSON.parse(localStorage.getItem('user')),
      ImageClusters: wildCardPDF
    };

    this.reportServ.SendWildcardReport(this.global.GetServer(), filterData).subscribe(res => {
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
