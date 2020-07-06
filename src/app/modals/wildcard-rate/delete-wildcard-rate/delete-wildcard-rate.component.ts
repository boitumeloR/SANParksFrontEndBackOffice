import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteWildcardRateSuccessfulComponent } from 'src/app/modals/wildcard-rate/delete-wildcard-rate-successful/delete-wildcard-rate-successful.component';


@Component({
  selector: 'app-delete-wildcard-rate',
  templateUrl: './delete-wildcard-rate.component.html',
  styleUrls: ['./delete-wildcard-rate.component.scss']
})
export class DeleteWildcardRateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulDeleteWildcardRate(){
    const deleteWildcardRateSuccessfulDialog = this.dialog.open(DeleteWildcardRateSuccessfulComponent);
  }
}
