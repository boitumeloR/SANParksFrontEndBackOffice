import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wildcard-category-added',
  templateUrl: './wildcard-category-added.component.html',
  styleUrls: ['./wildcard-category-added.component.scss']
})
export class WildcardCategoryAddedComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<WildcardCategoryAddedComponent>, private router: Router) { }

  ngOnInit(): void {
  }
  openWildcardRate(){
    this.closeSheet();
    this.router.navigate(['/Wildcard-Rate']);
  }

  closeSheet(){
    this.bottomSheetRef.dismiss();
  }
}
