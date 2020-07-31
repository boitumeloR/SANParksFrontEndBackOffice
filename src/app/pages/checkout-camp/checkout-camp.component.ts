import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CancelAlertComponent } from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { SuccessModalComponent } from 'src/app/modals/auxilliary-modals/success-modal/success-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

const ELEMENT_DATA: any[] = [
  { name: 'Tumi', surname: 'Rampete', ID: '99999999999', age: 22, country: 'South Africa', paid: true},
  { name: 'Jade', surname: 'Arumugam', ID: '99999999999', age: 22, country: 'South Africa', paid: true},
  { name: 'Robyn', surname: 'Pillay', ID: '999999999999', age: 22, country: 'South Africa',  paid: false},
];

@Component({
  selector: 'app-checkout-camp',
  templateUrl: './checkout-camp.component.html',
  styleUrls: ['./checkout-camp.component.scss']
})
export class CheckoutCampComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router) { }

  displayedColumns: string[] = ['name', 'surname', 'id', 'age', 'country'];
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
    this.router.navigateByUrl('unassignAcc');
  }
}
