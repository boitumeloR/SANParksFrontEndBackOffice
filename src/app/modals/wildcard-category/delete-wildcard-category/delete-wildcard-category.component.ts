import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-wildcard-category',
  templateUrl: './delete-wildcard-category.component.html',
  styleUrls: ['./delete-wildcard-category.component.scss']
})
export class DeleteWildcardCategoryComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
