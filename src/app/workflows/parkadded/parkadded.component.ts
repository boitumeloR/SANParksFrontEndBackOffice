import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
@Component({
  selector: 'app-parkadded',
  templateUrl: './parkadded.component.html',
  styleUrls: ['./parkadded.component.scss']
})
export class ParkaddedComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<ParkaddedComponent>, private router: Router) { }

  ngOnInit(): void {
  }

  openParkGate(){
    this.closeSheet();
    this.router.navigate(['/Park-Gate']);
  }
  openDailyConservationFee(){
    this.closeSheet();
    this.router.navigate(['/Daily-Conservation-Fee']);
  }
  openCamp(){
    this.closeSheet();
    this.router.navigate(['/Camp']);
  }

  closeSheet(){
    this.bottomSheetRef.dismiss();
  }
}
