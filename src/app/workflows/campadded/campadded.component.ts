import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
@Component({
  selector: 'app-campadded',
  templateUrl: './campadded.component.html',
  styleUrls: ['./campadded.component.scss']
})
export class CampaddedComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<CampaddedComponent>, private router: Router) { }

  ngOnInit(): void {
  }
  openCampGateTime(){
    this.closeSheet();
    this.router.navigate(['/Camp-Gate-Time']);
  }

  closeSheet(){
    this.bottomSheetRef.dismiss();
  }
}
