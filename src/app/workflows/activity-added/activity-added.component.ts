import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
@Component({
  selector: 'app-activity-added',
  templateUrl: './activity-added.component.html',
  styleUrls: ['./activity-added.component.scss']
})
export class ActivityAddedComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<ActivityAddedComponent>, private router: Router) { }

  ngOnInit(): void {
  }

  openActivitySlot(){
    this.closeSheet();
    this.router.navigate(['/Activity-Slot']);
  }

  openActivityRate(){
    this.closeSheet();
    this.router.navigate(['/Activity-Rate']);
  }
  closeSheet(){
    this.bottomSheetRef.dismiss();
  }
}
