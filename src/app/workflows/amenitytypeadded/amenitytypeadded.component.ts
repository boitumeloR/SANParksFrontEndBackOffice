import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
@Component({
  selector: 'app-amenitytypeadded',
  templateUrl: './amenitytypeadded.component.html',
  styleUrls: ['./amenitytypeadded.component.scss']
})
export class AmenitytypeaddedComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<AmenitytypeaddedComponent>, private router: Router) { }

  ngOnInit(): void {
  }
  openAmenity(){
    this.closeSheet();
    this.router.navigate(['/Amenity']);
  }

  closeSheet(){
    this.bottomSheetRef.dismiss();
  }
}
