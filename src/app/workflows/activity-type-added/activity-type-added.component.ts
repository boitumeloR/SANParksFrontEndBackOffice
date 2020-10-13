import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
@Component({
  selector: 'app-activity-type-added',
  templateUrl: './activity-type-added.component.html',
  styleUrls: ['./activity-type-added.component.scss']
})
export class ActivityTypeAddedComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<ActivityTypeAddedComponent>, private router: Router) { }

  ngOnInit(): void {
  }

  openActivity(){
    this.closeSheet();
    this.router.navigate(['/Activity']);
  }
  closeSheet(){
    this.bottomSheetRef.dismiss();
  }
}
