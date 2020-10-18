import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import { AvailabilityService } from 'src/app/services/Available/availability.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ReportingService } from 'src/app/services/Reports/reporting.service';
import { Title } from '@angular/platform-browser';
import { SuccessModalComponent } from 'src/app/modals/auxilliary-modals/success-modal/success-modal.component';
@Component({
  selector: 'app-payment-report',
  templateUrl: './payment-report.component.html',
  styleUrls: ['./payment-report.component.scss']
})
export class PaymentReportComponent implements OnInit {

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
  paymentData;
  beforeRefunds = 0;
  grandTotal = 0;
  // Tables

  accommodationColumns: string[] = ['dateCreated', 'stayDates', 'dates', 'paidAmount'];
  activityColumns: string[] = ['dateCreated', 'dates', 'paidAmount'];
  paymentColumns: string[] = ['paymentDate', 'paymentType', 'paymentAmount'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private snack: MatSnackBar,
              private global: GlobalService, private reportServ: ReportingService,
              private avail: AvailabilityService, private fb: FormBuilder,
              private router: Router, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Payment Report');
    this.reportForm = this.fb.group({
      start: [null, Validators.required],
      end: [null, Validators.required]
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
          Session: JSON.parse(localStorage.getItem('user'))
        };

        this.reportServ.GetPaymentReport(this.global.GetServer(), filterData).subscribe(res => {
          if (res.Session !== null) {

            this.generated = true;
            this.paymentData = null;
            this.companyInfo = null;
            this.beforeRefunds = 0;
            this.grandTotal = 0;
            console.log(res);
            this.paymentData = new MatTableDataSource(res.Payments);
            this.paymentData.paginator = this.paginator;
            this.beforeRefunds = res.PaymentTotal;
            this.grandTotal = res.PaymentTotal - res.RefundTotal;
            localStorage.setItem('user', JSON.stringify(res.Session));

          } else {
            const ref = this.dialog.open(ErrorModalComponent, {
              data: { errorMessage: 'Session Error, Login Again!' }
            });

            this.router.navigateByUrl('Login');
          }
        });
      }
    }
  }

  SendReport() {

    const filterData = {
      StartDate: new Date(this.reportForm.get('start').value),
      EndDate: new Date(this.reportForm.get('end').value),
      Session: JSON.parse(localStorage.getItem('user')),
    };

    this.reportServ.SendPaymentReport(this.global.GetServer(), filterData).subscribe(res => {
      if (res.Session) {
        if (res.Success === true) {
          localStorage.setItem('user', JSON.stringify(res.Session));
          // PDF
          console.log(res.PDF);
          const data = res.PDF;
          const fileName = `${ new Date()} - Weekly Booking Report`;
          if (window.navigator && window.navigator.msSaveOrOpenBlob) { // IE workaround
              const byteCharacters = atob(data);
              const byteNumbers = new Array(byteCharacters.length);
              for (let i = 0; i < byteCharacters.length; i++) {
                  byteNumbers[i] = byteCharacters.charCodeAt(i);
              }
              const byteArray = new Uint8Array(byteNumbers);
              const blob = new Blob([byteArray], {type: 'application/pdf'});
              window.navigator.msSaveOrOpenBlob(blob, fileName);
          }
          else { // much easier if not IE
            const pdfWindow = window.open('');
            pdfWindow.document.write(
                `<iframe width='100%' height='100%' src='data:application/pdf;base64,
                ${encodeURI(data)}'></iframe>`
            );
          }

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
