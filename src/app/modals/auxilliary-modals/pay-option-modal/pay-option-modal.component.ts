import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pay-option-modal',
  templateUrl: './pay-option-modal.component.html',
  styleUrls: ['./pay-option-modal.component.scss']
})
export class PayOptionModalComponent implements OnInit {

  confirmMessage = '';
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<PayOptionModalComponent>) { }

  ngOnInit(): void {

  }

  Card() {
    this.dialogRef.close(true);
  }

  Cash() {
    this.dialogRef.close(false);
  }

}
