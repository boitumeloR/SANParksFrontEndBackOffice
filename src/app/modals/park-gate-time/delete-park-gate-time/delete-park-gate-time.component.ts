import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-park-gate-time',
  templateUrl: './delete-park-gate-time.component.html',
  styleUrls: ['./delete-park-gate-time.component.scss']
})
export class DeleteParkGateTimeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
