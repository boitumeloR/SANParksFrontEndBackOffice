import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddEmployeeComponent } from 'src/app/modals/employee/add-employee/add-employee.component';
import { ViewEmployeeComponent } from 'src/app/modals/employee/view-employee/view-employee.component';
import {MatDialog} from '@angular/material/dialog';

export interface PeriodicElement {
  park: string;
  employeeName: string;
  identityNumber: string

}
const ELEMENT_DATA: PeriodicElement[] = [
  { park: 'Addo Elephant National Park', employeeName: 'Robyn Sancha Pillay',identityNumber: "9805274927963"},
  { park: 'Golden Gates Highlands National Park',employeeName: "Blessing Thulani Makumbila",identityNumber: "9510134927820"},
  { park: 'Kruger National Park', employeeName: 'Jade Dalene Arumugan',identityNumber: "0005254561729"},
];
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  displayedColumns: string[] = ['park','employeeName','identityNumber','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
  }

  addEmployee(){
    const addEmployeeDialog =  this.dialog.open(AddEmployeeComponent,{disableClose: true});
  }

  viewEmployee(employee){
    const viewEmployeeDialog =  this.dialog.open(ViewEmployeeComponent);
  }
}
