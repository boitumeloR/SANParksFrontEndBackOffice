import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmModalComponent } from 'src/app/modals/auxilliary-modals/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-park-performance',
  templateUrl: './park-performance.component.html',
  styleUrls: ['./park-performance.component.scss']
})
export class ParkPerformanceComponent implements OnInit {

  constructor(private dialog: MatDialog, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  Submit() {
    const ref = this.dialog.open(ConfirmModalComponent, {
      data: {confirmMessage: 'Invalid dates, choose different dates'}
    });
  }
}
