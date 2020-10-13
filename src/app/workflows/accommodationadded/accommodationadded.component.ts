import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accommodationadded',
  templateUrl: './accommodationadded.component.html',
  styleUrls: ['./accommodationadded.component.scss']
})
export class AccommodationaddedComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<AccommodationaddedComponent>, private router: Router) { }

  ngOnInit(): void {
  }
  openBaseRate(){
    this.closeSheet();
    this.router.navigate(['/Accomodation-Base-Rate']);
  }
  openAddRate(){
    this.closeSheet();
    this.router.navigate(['/Accomodation-Add-Rate']);
  }
  openAmenity(){
    this.closeSheet();
    this.router.navigate(['/Amenity']);
  }
  closeSheet(){
    this.bottomSheetRef.dismiss();
  }
}
