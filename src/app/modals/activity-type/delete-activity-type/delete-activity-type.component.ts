import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-activity-type',
  templateUrl: './delete-activity-type.component.html',
  styleUrls: ['./delete-activity-type.component.scss']
})
export class DeleteActivityTypeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
