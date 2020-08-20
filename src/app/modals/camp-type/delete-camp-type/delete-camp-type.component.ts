import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-camp-type',
  templateUrl: './delete-camp-type.component.html',
  styleUrls: ['./delete-camp-type.component.scss']
})
export class DeleteCampTypeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
