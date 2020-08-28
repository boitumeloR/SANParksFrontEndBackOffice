import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-wildcard-cluster',
  templateUrl: './delete-wildcard-cluster.component.html',
  styleUrls: ['./delete-wildcard-cluster.component.scss']
})
export class DeleteWildcardClusterComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
