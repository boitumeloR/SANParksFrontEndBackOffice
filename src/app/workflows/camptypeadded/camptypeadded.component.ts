import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camptypeadded',
  templateUrl: './camptypeadded.component.html',
  styleUrls: ['./camptypeadded.component.scss']
})
export class CamptypeaddedComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<CamptypeaddedComponent>, private router: Router) { }

  ngOnInit(): void {
  }
  openCamp(){
    this.closeSheet();
    this.router.navigate(['/Camp']);
  }

  closeSheet(){
    this.bottomSheetRef.dismiss();
  }
}
