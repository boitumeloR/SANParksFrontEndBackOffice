import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmModalComponent } from 'src/app/modals/auxilliary-modals/confirm-modal/confirm-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pay-option',
  templateUrl: './pay-option.component.html',
  styleUrls: ['./pay-option.component.scss']
})
export class PayOptionComponent implements OnInit {

  constructor(private dialog: MatDialog, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  CashPay() {
    const ref = this.dialog.open(ConfirmModalComponent, {
      data: {confirmMessage: 'Cash paid in full?'}
    });

    ref.afterClosed().subscribe(res =>  {
      this.snack.open('Successfully Paid', 'Okay', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    });
  }
}
