import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProfileComponent} from 'src/app/modals/employee/update-profile/update-profile.component';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  loggedEmployee;
  ngOnInit(): void {
    this.loggedEmployee = JSON.parse(localStorage.getItem('loggedEmployee'));
  }

  updateProfile(){
    const updateProfileDialog = this.dialog.open(UpdateProfileComponent, {disableClose: true});
  }

}
