import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CancelAlertComponent } from '../auxilliary-modals/cancel-alert/cancel-alert.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.scss']
})
export class AddEquipmentComponent implements OnInit {

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<AddEquipmentComponent>,
              private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  Cancel() {
    const cancelDialog = this.dialog.open(CancelAlertComponent);
    cancelDialog.afterClosed().subscribe(res => {
      this.dialogRef.close();
    });
  }

  Add() {
    this.dialogRef.close();
    this.snackbar.open('Successfully added equipment for participant', 'Okay', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000
    });
  }
}
