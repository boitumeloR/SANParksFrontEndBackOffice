import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmModalComponent } from 'src/app/modals/auxilliary-modals/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-wildcard-report',
  templateUrl: './wildcard-report.component.html',
  styleUrls: ['./wildcard-report.component.scss']
})
export class WildcardReportComponent implements OnInit {

  constructor(private dialog: MatDialog, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  Submit() {
    const ref = this.dialog.open(ConfirmModalComponent, {
      data: {confirmMessage: 'Invalid dates, choose different dates'}
    });
  }
}
