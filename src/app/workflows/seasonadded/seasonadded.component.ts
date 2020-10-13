import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seasonadded',
  templateUrl: './seasonadded.component.html',
  styleUrls: ['./seasonadded.component.scss']
})
export class SeasonaddedComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<SeasonaddedComponent>, private router: Router) { }

  ngOnInit(): void {
  }
  openParkGateTime(){
    this.closeSheet();
    this.router.navigate(['/Park-Gate-Time']);
  }
  openCampGateTime(){
    this.closeSheet();
    this.router.navigate(['/Camp-Gate-Time']);
  }
  openAccBaseRate(){
    this.closeSheet();
    this.router.navigate(['/Accomodation-Base-Rate']);
  }
  closeSheet(){
    this.bottomSheetRef.dismiss();
  }
}
