import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ParkService } from 'src/app/services/Park/park.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dash-board-home',
  templateUrl: './dash-board-home.component.html',
  styleUrls: ['./dash-board-home.component.scss']
})
export class DashBoardHomeComponent implements OnInit {
  pieChart;
  BarChart;
  constructor(private parkService: ParkService, private globalService: GlobalService, private cdRef: ChangeDetectorRef,
              private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Home');
    this.displayVisualizer();
  }

  displayVisualizer(){
    this.parkService.ReadVisualizerData(this.globalService.GetServer()).subscribe((data: any) => {
      const keys = data.BookingStatusReportData.map(XX => XX.Name);
      const valuesAssociatedToKey = data.BookingStatusReportData.map(XX => XX.Count);

      this.pieChart = new Chart('canvas', {
        type: 'pie',
        data: {
        labels: keys,
        datasets: [{
          backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#c45850'],
          borderColor: '#000000',
          borderWidth: 2,
          data: valuesAssociatedToKey
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Pie Chart Depicting Status of Previous Months Bookings.'
        },
        legend: {
          display: false
        },
        animation: {
          duration: 20000000000
        }
      }
    });

      this.cdRef.detectChanges();
      this.BarChart = new Chart('canvasBar', {
        type: 'bar',
        data: {
        labels: keys,
        datasets: [{
          backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#c45850'],
          borderColor: '#000000',
          borderWidth: 2,
          data: valuesAssociatedToKey
      }]
    },
      options: {
        title: {
          display: true,
          text: 'Bar Graph Depicting Status of Previous Months Bookings.'
        },
        legend: {
          display: false
        },
        animation: {
          duration: 20000000000
        },
        scales: {
          xAxes: [{
              display: true
          }],
          yAxes: [{
              ticks: {
              beginAtZero: true
            }
        }]
      }
      }
    });
      this.cdRef.detectChanges();
    });
  }
}

