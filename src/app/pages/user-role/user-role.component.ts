import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { AddUserRoleComponent } from 'src/app/modals/user-role/add-user-role/add-user-role.component';
import { ViewUserRoleComponent } from 'src/app/modals/user-role/view-user-role/view-user-role.component';
import { MatDialog} from '@angular/material/dialog';
import { UserRole, UserRoleService} from 'src/app/services/UserRole/user-role.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.scss']
})
export class UserRoleComponent implements OnInit {

  displayedColumns: string[] = ['UserRoleName', 'view'];
  dataSource;
  filter;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private userRoleService: UserRoleService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.userRoleService.requestReferesh.subscribe(() => {this.getUserRole(); });
    this.getUserRole();
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addUserRole(){
    const addUserRoleConfirmationDialog = this.dialog.open(AddUserRoleComponent, {disableClose: true});
  }

  viewUserRole(userRole){
    localStorage.setItem('userRole', JSON.stringify(userRole));
    const viewUserRoleDialog = this.dialog.open(ViewUserRoleComponent);
  }

  getUserRole(){
    this.userRoleService.ReadUserRole(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.UserRoles);
      this.dataSource.paginator = this.paginator;
    });
  }
}
