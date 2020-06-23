import { Component, OnInit } from '@angular/core';
import { UpdateWildcardCategoryConfirmationComponent } from 'src/app/modals/wildcard-category/update-wildcard-category-confirmation/update-wildcard-category-confirmation.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-update-wildcard-category',
  templateUrl: './update-wildcard-category.component.html',
  styleUrls: ['./update-wildcard-category.component.scss']
})
export class UpdateWildcardCategoryComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateWildcardCategory(){
    const updateWildcardCategoryConfirmationDialog = this.dialog.open(UpdateWildcardCategoryConfirmationComponent)
  }
}
