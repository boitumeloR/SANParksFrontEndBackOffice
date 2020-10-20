import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-help-doc',
  templateUrl: './help-doc.component.html',
  styleUrls: ['./help-doc.component.scss']
})
export class HelpDocComponent implements OnInit {
  src: any;
  park: boolean;
  campType: boolean;
  constructor(private router: Router, @Inject(MAT_DIALOG_DATA) private data: any) {}

  ngOnInit(): void {
    this.src = this.data;
    console.log(this.src)
    if (this.src === 1){
      this.park = true;
      this.campType = false;
    }
    else if(this.src === 2){
      this.park = false;
      this.campType = true;
    }
  }
  openHelp(){
    this.router.navigateByUrl('Help-Document');
  }
}
