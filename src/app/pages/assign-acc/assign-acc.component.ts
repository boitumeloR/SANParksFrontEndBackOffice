import { Component, OnInit } from '@angular/core';
import 'chartjs-plugin-datalabels';
import { MatDialog } from '@angular/material/dialog';
import { SuccessModalComponent } from 'src/app/modals/auxilliary-modals/success-modal/success-modal.component';
import { CancelAlertComponent } from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { ConfirmModalComponent } from 'src/app/modals/auxilliary-modals/confirm-modal/confirm-modal.component';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AssignAccommodationComponent } from 'src/app/modals/auxilliary-modals/assign-accommodation/assign-accommodation.component';

@Component({
  selector: 'app-assign-acc',
  templateUrl: './assign-acc.component.html',
  styleUrls: ['./assign-acc.component.scss']
})
export class AssignAccComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['Unit Number: EKF6', 'MUnit Number: EKF6', 'Unit Number: EKF6', 'Unit Number: EKF6'];

  opened = false;
  constructor(private dialog: MatDialog, private router: Router) {
  }


  ngOnInit() {
  }

  Submit() {
    const successDialog = this.dialog.open(AssignAccommodationComponent, {
      disableClose: true,
      data: {successMessage: 'You have successfully checked in'}
    });
    successDialog.afterClosed().subscribe(res => {
      this.router.navigateByUrl('checkInAccommodation');
    });
  }

  Cancel() {

  }
}
