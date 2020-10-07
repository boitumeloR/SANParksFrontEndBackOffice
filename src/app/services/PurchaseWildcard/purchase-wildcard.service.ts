import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {SuccessfulWildcardPurchaseComponent} from 'src/app/pages/Purchase Wildcard/successful-wildcard-purchase/successful-wildcard-purchase.component';
import { UnsuccessfulWCPurchaseComponent } from 'src/app/pages/Purchase Wildcard/unsuccessful-wcpurchase/unsuccessful-wcpurchase.component';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
@Injectable({
  providedIn: 'root'
})
export class PurchaseWildcardService {

  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog) { }

  searchClient(client, link){
    return this.http.post(`${link}/api/purchaseWildcard/getClient`, client);
  }

  getRate(wildcardData, link){
    return this.http.post(`${link}/api/purchaseWildcard/getWildcardRate`, wildcardData);
  }

  purchaseWildcard(wildcardData, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/purchaseWildcard/purchaseWildcard`, wildcardData).subscribe((addResult: any) => {
      if (addResult.Error){
        const unsuccessfulPurchase = this.dialog.open(UnsuccessfulWCPurchaseComponent);
        localStorage.setItem('user', JSON.stringify(addResult.user));
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        const successfulPurchase = this.dialog.open(SuccessfulWildcardPurchaseComponent);
        localStorage.setItem('user', JSON.stringify(addResult.user));
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: error.message }
      });
    });
  }
}
