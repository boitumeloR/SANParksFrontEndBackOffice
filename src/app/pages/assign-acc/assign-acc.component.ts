import { Component, OnInit } from '@angular/core';
import 'chartjs-plugin-datalabels';
import { MatDialog } from '@angular/material/dialog';
import { SuccessModalComponent } from 'src/app/modals/auxilliary-modals/success-modal/success-modal.component';
import { CancelAlertComponent } from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { ConfirmModalComponent } from 'src/app/modals/auxilliary-modals/confirm-modal/confirm-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-acc',
  templateUrl: './assign-acc.component.html',
  styleUrls: ['./assign-acc.component.scss']
})
export class AssignAccComponent implements OnInit {
  MS_PER_DAY = 1000 * 60 * 60 * 24;

  data = [
    { task: 'Task 1', startDate: '2018-04-08 00:00:00.000', endDate: '2018-06-08 00:00:00.000' },
    { task: 'Task 2', startDate: '2018-05-08 00:00:00.000', endDate: '2018-07-19 00:00:00.000' },
    { task: 'Task 3', startDate: '2018-07-08 00:00:00.000', endDate: '2018-09-08 00:00:00.000' },
    { task: 'Growth Stages' },
  ];

  data1 = [
    {},
    {},
    {},
    { task: 'VP', startDate: '2018-04-21 00:00:00.000', endDate: '2018-05-08 00:00:00.000' },
  ];

  data2 = [
    {},
    {},
    {},
    { task: 'VE', startDate: '2018-05-09 00:00:00.000', endDate: '2018-06-08 00:00:00.000' },
  ];

  chartData;
  options;
  plantingDays = '2018-04-01 00:00:00.000';

  opened = false;
  constructor(private dialog: MatDialog, private router: Router) {
  }

  lables = ['Bungalow CK6P', 'Bungalow CK6P', 'Bungalow P44', 'Bungalow BG5T'];
  stages = ['Open', 'Open', 'Open', 'Open'];

  createChart() {
    const that = this;
    this.chartData = {
      // labels: this.data.map(t => t.task),
      labels: this.lables,
      datasets: [
        {
          data: this.data.map(t => {
            return this.dateDiffInDays(new Date(this.plantingDays), new Date(t.startDate));
          }),
          datalabels: {
            color: '#029ced',
            formatter:  (value, context) => {
              return '';
            }
          },
          backgroundColor: 'rgba(63,103,126,0)',
          hoverBackgroundColor: 'rgba(50,90,100,0)',
        },
        {
          data: this.data.map(t => {
            return this.dateDiffInDays(new Date(t.startDate), new Date(t.endDate));
          }),
          datalabels: {
            color: '#025ced',
            formatter:  (value, context) =>  {
              return '';
            },
          },
        },
        {
          data: this.data1.map(t => {
            return this.dateDiffInDays(new Date(t.startDate), new Date(t.endDate));
          }),
          datalabels: {
            color: '#025ced',
            formatter: (value, context) => {
              return that.stages[0];
            },
          },
        },
        {
          data: this.data2.map(t => {
            return this.dateDiffInDays(new Date(t.startDate), new Date(t.endDate));
          }),
          datalabels: {
            color: '#025ced',
            formatter:  (value, context) => {
              return that.stages[1];
            },
          },
        },
      ],
    };

    this.options = {
      events: ['click'],
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Assign Accommodation',
      },
      legend: { display: false },
      tooltips: {
        mode: 'index',
        callbacks: {
          label:  (tooltipItem, d) => {
            let label = d.datasets[tooltipItem.datasetIndex].label || '';
            const date = new Date(that.plantingDays);
            if (tooltipItem.datasetIndex === 0) {
              const diff = that.dateDiffInDays(date, new Date(that.data[tooltipItem.index].startDate));
              date.setDate(diff + 1);
              label += 'Start Date: ' + that.getDate(date);
            } else if (tooltipItem.datasetIndex === 1) {
              const diff = that.dateDiffInDays(date, new Date(that.data[tooltipItem.index].endDate));
              date.setDate(diff + 1);
              label += 'End Date: ' + that.getDate(date);
            }
            if (this.opened === false) {
              const assignDialog = this.dialog.open(ConfirmModalComponent, {
                data: {confirmMessage: 'Assign to this accommodation?'}
              });
              this.opened = true;
              assignDialog.afterClosed().subscribe(res => {
                this.opened = false;
              });
            }
            console.log('hey');
            return label;
          },
        },
      },
      scales: {
        xAxes: [{
          stacked: true,
          ticks: {
            callback:  (value, index, values) => {
              const date = new Date(that.plantingDays);
              date.setDate(value);
              return that.getDate(date);
            },
          },
        }],
        yAxes: [{
          stacked: true,
        }],
      },
    };
  }

  getDate(date) {
    return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).substr(-2)
      + '-' + ('0' + (date.getDate())).substr(-2);
  }

  dateDiffInDays(a, b) {
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / this.MS_PER_DAY);
  }

  ngOnInit() {
    this.createChart();
  }
  Cancel() {
    const cancelDialog = this.dialog.open(CancelAlertComponent, {
      disableClose: true
    });
  }

  Submit() {
    const successDialog = this.dialog.open(SuccessModalComponent, {
      disableClose: true,
      data: {successMessage: 'You have successfully checked in'}
    });
    successDialog.afterClosed().subscribe(res => {
      this.router.navigateByUrl('checkInAccommodation');
    });
  }
}
