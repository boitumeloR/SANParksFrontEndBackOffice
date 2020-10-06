import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-role-add',
  templateUrl: './user-role-add.component.html',
  styleUrls: ['./user-role-add.component.scss']
})
export class UserRoleAddComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<UserRoleAddComponent>, private router: Router) { }

  ngOnInit(): void {
  }
  openEmployee(){
    this.closeSheet();
    this.router.navigate(['/Employee']);
  }

  closeSheet(){
    this.bottomSheetRef.dismiss();
  }
}
