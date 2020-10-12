import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-park',
  templateUrl: './delete-park.component.html',
  styleUrls: ['./delete-park.component.scss']
})
export class DeleteParkComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
