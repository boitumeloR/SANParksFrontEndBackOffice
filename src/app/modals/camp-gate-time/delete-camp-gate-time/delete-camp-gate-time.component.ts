import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-camp-gate-time',
  templateUrl: './delete-camp-gate-time.component.html',
  styleUrls: ['./delete-camp-gate-time.component.scss']
})
export class DeleteCampGateTimeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
