import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-delete-amenity',
  templateUrl: './delete-amenity.component.html',
  styleUrls: ['./delete-amenity.component.scss']
})
export class DeleteAmenityComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
