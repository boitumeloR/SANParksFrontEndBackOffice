import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-wildcard-status-confirmation',
  templateUrl: './update-wildcard-status-confirmation.component.html',
  styleUrls: ['./update-wildcard-status-confirmation.component.scss']
})
export class UpdateWildcardStatusConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog, private SnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }


  cancelConfirmation(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }

  updateStatus() { 
    this.SnackBar.open("The wildcard status has been changed to active.", "OK", {
      duration: 4500,
    });
  }
}
