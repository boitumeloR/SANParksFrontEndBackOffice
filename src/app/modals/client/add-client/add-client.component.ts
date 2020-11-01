import { Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddClientConfirmationComponent} from 'src/app/modals/client/add-client-confirmation/add-client-confirmation.component';
import { SuccessModalComponent } from '../../auxilliary-modals/success-modal/success-modal.component';
import { ClientService } from 'src/app/services/Client/client.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  addClientForm: FormGroup;
  countries: any;
  titles: any;
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder,
              private validationErrorSnackBar: MatSnackBar, private serv: ClientService,
              private dialogRef: MatDialogRef<AddClientComponent>, private global: GlobalService,
              private router: Router) { }

  ngOnInit(): void {

    this.serv.getCountries(this.global.GetServer())
    .subscribe(country => {
      this.countries = country;

      this.serv.getTitles(this.global.GetServer())
      .subscribe(res => {
        this.titles = res;
      });
    });

    this.addClientForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required,  Validators.maxLength(30)])],
      surname : ['', Validators.compose([Validators.required,  Validators.maxLength(30)])],
      identityNumber : ['', Validators.compose([Validators.required,  Validators.maxLength(20)])],
      cellphoneNumber : ['', Validators.required],
      title : [null, Validators.required],
      emailAddress : ['', [Validators.required, Validators.email]],
      addressLine1 : ['', Validators.compose([Validators.required,  Validators.maxLength(50)])],
      addressLine2 : ['', Validators.compose([Validators.required,  Validators.maxLength(50)])],
      postalCode : ['', Validators.compose([Validators.required,  Validators.maxLength(4)])],
      country: ['', Validators.required],
      age: [null, Validators.compose([Validators.required, Validators.min(13), Validators.max(100)])]
    });
  }

  addClient(){
    if (this.addClientForm.invalid){
      this.displayValidationError();
    }
    else{
      const clientOBJ = {
        Session: JSON.parse(localStorage.getItem('user')),
        ClientName: this.addClientForm.get('name').value,
        ClientSurname: this.addClientForm.get('surname').value,
        ClientEmail: this.addClientForm.get('emailAddress').value,
        TitleID: this.addClientForm.get('title').value,
        CountryID: this.addClientForm.get('country').value,
        Age: this.addClientForm.get('age').value,
        ClientCellphone: this.addClientForm.get('cellphoneNumber').value,
        ClientIDCode: this.addClientForm.get('identityNumber').value,
        Address1: this.addClientForm.get('addressLine1').value,
        Address2: this.addClientForm.get('addressLine2').value,
        PostalCode: this.addClientForm.get('postalCode').value
      };

      this.serv.CreateClient(clientOBJ, this.global.GetServer())
        .subscribe(res => {
          if (res.Session) {
            localStorage.setItem('user', JSON.stringify(res.Session));
            if (res.Success) {
              this.dialog.open(SuccessModalComponent, {
                data: {successMessage: 'You have successfully added a client!'}
              });

              this.dialogRef.close(true);
            } else {
              this.validationErrorSnackBar.open(res.Message, 'OK', {
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
                duration: 5000
              });
            }
          } else {
            localStorage.removeItem('user');
            this.validationErrorSnackBar.open(res.Message, 'OK', {
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
              duration: 5000
            });
            this.router.navigateByUrl('Login');
          }
        });

      this.dialogRef.close();
    }
  }
  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
    confirmCancelDialog.afterClosed().subscribe(result => {
      if (result === true){
        this.dialogRef.close(false);
      }
    });
  }

  displayValidationError() {
    this.validationErrorSnackBar.open('The entered details are not in the correct format. Please try again.', 'OK', {
      duration: 3500,
    });
  }
}
