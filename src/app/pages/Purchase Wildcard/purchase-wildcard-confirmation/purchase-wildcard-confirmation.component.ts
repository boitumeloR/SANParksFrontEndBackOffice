import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SuccessfulWildcardPurchaseComponent} from 'src/app/pages/Purchase Wildcard/successful-wildcard-purchase/successful-wildcard-purchase.component'
@Component({
  selector: 'app-purchase-wildcard-confirmation',
  templateUrl: './purchase-wildcard-confirmation.component.html',
  styleUrls: ['./purchase-wildcard-confirmation.component.scss']
})
export class PurchaseWildcardConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successWCPurchase(){
    const wilcardCardPurchaseSuccess = this.dialog.open(SuccessfulWildcardPurchaseComponent);
  }
}
