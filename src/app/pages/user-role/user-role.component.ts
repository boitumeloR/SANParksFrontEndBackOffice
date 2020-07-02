import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddUserRoleComponent } from 'src/app/modals/user-role/add-user-role/add-user-role.component';
import { ViewUserRoleComponent } from 'src/app/modals/user-role/view-user-role/view-user-role.component';
import {MatDialog} from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Camp Reception'},
  {name: 'Inspector'},
  {name: 'System Administrator'},
];
@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.scss']
})
export class UserRoleComponent implements OnInit {

  displayedColumns: string[] = ['name','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addUserRole(){
    const addUserRoleConfirmationDialog = this.dialog.open(AddUserRoleComponent,{disableClose: true});
  }

  viewUserRole(userRole){
    const viewUserRoleDialog = this.dialog.open(ViewUserRoleComponent)
  }
}
