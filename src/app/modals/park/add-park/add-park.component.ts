import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-park',
  templateUrl: './add-park.component.html',
  styleUrls: ['./add-park.component.scss']
})
export class AddParkComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }
}
