import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-activity-slot',
  templateUrl: './delete-activity-slot.component.html',
  styleUrls: ['./delete-activity-slot.component.scss']
})
export class DeleteActivitySlotComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
