import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accommodationtypeadded',
  templateUrl: './accommodationtypeadded.component.html',
  styleUrls: ['./accommodationtypeadded.component.scss']
})
export class AccommodationtypeaddedComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<AccommodationtypeaddedComponent>, private router: Router) { }

  ngOnInit(): void {
  }
  openAccommodation(){
    this.closeSheet();
    this.router.navigate(['/Accomodation']);
  }

  closeSheet(){
    this.bottomSheetRef.dismiss();
  }
}
