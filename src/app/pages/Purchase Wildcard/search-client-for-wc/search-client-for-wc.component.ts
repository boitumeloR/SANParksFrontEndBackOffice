import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PurchaseWildcardComponent } from 'src/app/modals/purchase-wildcard/purchase-wildcard.component';
import { GlobalService } from 'src/app/services/Global/global.service';
import { PurchaseWildcardService } from 'src/app/services/PurchaseWildcard/purchase-wildcard.service';

@Component({
  selector: 'app-search-client-for-wc',
  templateUrl: './search-client-for-wc.component.html',
  styleUrls: ['./search-client-for-wc.component.scss']
})
export class SearchClientForWCComponent implements OnInit {
  searchClientForm: FormGroup;
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private purchaseWildcardService: PurchaseWildcardService, private globalService: GlobalService,
              private router: Router) { }

  ngOnInit(): void {
    this.searchClientForm = this.formBuilder.group({
      identityNUmber: ['', Validators.required]
    });
  }

  searchClient(){
    if (this.searchClientForm.invalid){
      this.displayValidationError();
    }
    else{
      const searchClient = {
        ClientIDNumber: this.searchClientForm.get('identityNUmber').value,
        authenticateUser:  JSON.parse(localStorage.getItem('user'))
      };

      this.purchaseWildcardService.searchClient(searchClient, this.globalService.GetServer()).subscribe((response: any) => {
        if (response.clientNotFound){
          this.clientNotFound();
          localStorage.setItem('user', JSON.stringify(response.user));
        }
        else if (response.error){
          this.displayError();
          localStorage.setItem('user', JSON.stringify(response.user));
        }
        else if (response.userLoggedOut){
          localStorage.removeItem('user');
          this.router.navigate(['/Login']);
        }
        else{
          const client = {
            ClientName: response.clientName,
            ClientNumber: response.CellNumber,
            clientEmail: response.clientEmail,
            clientID: response.clientID
          };

          localStorage.setItem('client', JSON.stringify(client));
          localStorage.setItem('user', JSON.stringify(response.user));
          const confirmCancelDialog = this.dialog.open(PurchaseWildcardComponent, {disableClose: true});
        }
      });
    }
  }

  clientNotFound() {
    this.validationErrorSnackBar.open('There is no client that matches the entered parameter', 'OK', {
      duration: 7000,
    });
  }

  displayValidationError() {
    this.validationErrorSnackBar.open('The entered details are not in the correct format. Please try again.', 'OK', {
      duration: 3500,
    });
  }

  displayError() {
    this.validationErrorSnackBar.open('An unexpected error has been encountered. Please try again.', 'OK', {
      duration: 3500,
    });
  }
}
