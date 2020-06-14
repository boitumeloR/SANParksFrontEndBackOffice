import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { AddBaseRateComponent } from 'src/app/modals/base-rate/add-base-rate/add-base-rate.component';
import { UpdateBaseRateComponent } from 'src/app/modals/base-rate/update-base-rate/update-base-rate.component';
import { DeleteBaseRateComponent } from 'src/app/modals/base-rate/delete-base-rate/delete-base-rate.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  opened: boolean;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor() { }

  ngOnInit(): void {
    this.opened = false;
  }

  toggleBurger() {
    this.opened = !this.opened;
  }

}
