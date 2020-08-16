import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-park-gate',
  templateUrl: './delete-park-gate.component.html',
  styleUrls: ['./delete-park-gate.component.scss']
})
export class DeleteParkGateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
