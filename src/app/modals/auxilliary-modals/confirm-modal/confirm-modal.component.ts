import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  confirmMessage = '';
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<ConfirmModalComponent>) { }

  ngOnInit(): void {
    this.confirmMessage = this.data.confirmMessage;
  }

  Confirm() {
    this.dialogRef.close(true);
  }

  Close() {
    this.dialogRef.close(false);
  }
}
