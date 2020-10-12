import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amenity-added',
  templateUrl: './amenity-added.component.html',
  styleUrls: ['./amenity-added.component.scss']
})
export class AmenityAddedComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<AmenityAddedComponent>, private router: Router) { }

  ngOnInit(): void {
  }
  openAmenityPenalty(){
    this.closeSheet();
    this.router.navigate(['/Amenity-Penalty']);
  }

  closeSheet(){
    this.bottomSheetRef.dismiss();
  }
}
