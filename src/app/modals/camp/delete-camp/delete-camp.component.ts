import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-camp',
  templateUrl: './delete-camp.component.html',
  styleUrls: ['./delete-camp.component.scss']
})
export class DeleteCampComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
