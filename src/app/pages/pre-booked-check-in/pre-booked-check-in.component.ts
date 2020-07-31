import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CancelAlertComponent } from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { SuccessModalComponent } from 'src/app/modals/auxilliary-modals/success-modal/success-modal.component';

const ELEMENT_DATA: any[] = [
  { name: 'Tumi', surname: 'Rampete', ID: '99999999999', age: 22, country: 'South Africa', paid: 'Yes'},
  { name: 'Jade', surname: 'Arumugam', ID: '99999999999', age: 22, country: 'South Africa', paid: 'No'},
  { name: 'Robyn', surname: 'Pillay', ID: '999999999999', age: 22, country: 'South Africa',  paid: 'Dependent'},
];
@Component({
  selector: 'app-pre-booked-check-in',
  templateUrl: './pre-booked-check-in.component.html',
  styleUrls: ['./pre-booked-check-in.component.scss']
})
export class PreBookedCheckInComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  displayedColumns: string[] = ['name', 'surname', 'id', 'age', 'country', 'conservation'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addSeason(){
    // const addSeasonDialog = this.dialog.open(AddSeasonComponent,{disableClose: true});
  }

  viewSeason(season){
    // const viewSeasonDialog = this.dialog.open(ViewSeasonComponent)
  }

  Cancel() {
    const cancelDialog = this.dialog.open(CancelAlertComponent, {
      disableClose: true
    });
  }

  Submit() {
    const submitDialog = this.dialog.open(SuccessModalComponent, {
      disableClose: true,
      data: {successMessage: 'You have successfully checked in!'}
    });
  }

}
