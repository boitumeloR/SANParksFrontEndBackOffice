import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parkgateadded',
  templateUrl: './parkgateadded.component.html',
  styleUrls: ['./parkgateadded.component.scss']
})
export class ParkgateaddedComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<ParkgateaddedComponent>, private router: Router) { }

  ngOnInit(): void {
  }
  openParkGateTime(){
    this.closeSheet();
    this.router.navigate(['/Park-Gate-Time']);
  }

  closeSheet(){
    this.bottomSheetRef.dismiss();
  }
}
