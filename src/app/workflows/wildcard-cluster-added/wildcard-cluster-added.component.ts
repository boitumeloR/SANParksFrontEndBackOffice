import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wildcard-cluster-added',
  templateUrl: './wildcard-cluster-added.component.html',
  styleUrls: ['./wildcard-cluster-added.component.scss']
})
export class WildcardClusterAddedComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<WildcardClusterAddedComponent>, private router: Router) { }

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
