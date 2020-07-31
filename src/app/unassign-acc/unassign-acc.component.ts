import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent } from '../modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AssignAccommodationComponent } from '../modals/auxilliary-modals/assign-accommodation/assign-accommodation.component';
import { SuccessModalComponent } from '../modals/auxilliary-modals/success-modal/success-modal.component';

@Component({
  selector: 'app-unassign-acc',
  templateUrl: './unassign-acc.component.html',
  styleUrls: ['./unassign-acc.component.scss']
})
export class UnassignAccComponent implements OnInit {

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
  }

  CheckIn() {
    const successDialog = this.dialog.open(SuccessModalComponent, {
      disableClose: true,
      data: {successMessage: 'You have successfully checked in'}
    });
    successDialog.afterClosed().subscribe(res => {
      this.router.navigateByUrl('checkInAccommodation');
    });
  }
  Cancel() {
    const successDialog = this.dialog.open(CancelAlertComponent, {
      disableClose: true
    });
    successDialog.afterClosed().subscribe(res => {
      this.router.navigateByUrl('checkInAccommodation');
    });
  }
}
