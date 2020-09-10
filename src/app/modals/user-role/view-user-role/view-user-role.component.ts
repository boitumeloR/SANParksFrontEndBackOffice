import { Component, OnInit } from '@angular/core';
import { UpdateUserRoleComponent} from 'src/app/modals/user-role/update-user-role/update-user-role.component';
import { DeleteUserRoleComponent} from 'src/app/modals/user-role/delete-user-role/delete-user-role.component';
import { MatDialog } from '@angular/material/dialog';
import { UserRole, UserRoleService } from 'src/app/services/UserRole/user-role.service';
import { GlobalService} from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-view-user-role',
  templateUrl: './view-user-role.component.html',
  styleUrls: ['./view-user-role.component.scss']
})
export class ViewUserRoleComponent implements OnInit {
userRole: UserRole;
  constructor(private dialog: MatDialog, private userRoleService: UserRoleService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.userRole = JSON.parse(localStorage.getItem('userRole'));
  }

  updateUserRole(){
    const updateUserRoleDialog = this.dialog.open(UpdateUserRoleComponent, {disableClose: true});
  }

  deleteUserRole(){
    const deleteUserRoleDialog =  this.dialog.open(DeleteUserRoleComponent);
    deleteUserRoleDialog.afterClosed().subscribe(result => {
      if (result === true){
        const user = JSON.parse(localStorage.getItem('user'));
        const authenticateUser = {
          authenticateUser: user
        };
        this.userRoleService.DeleteUserRole(authenticateUser,this.userRole.RoleID, this.globalService.GetServer());
      }
    });
  }
}
