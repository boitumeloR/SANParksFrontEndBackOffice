import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import {AddAccomodationAddRateUnsuccessfulComponent} from 'src/app/modals/accomodation-add-rate/add-accomodation-add-rate-unsuccessful/add-accomodation-add-rate-unsuccessful.component';
import {AddAccomodationAddRateSuccessfulComponent} from 'src/app/modals/accomodation-add-rate/add-accomodation-add-rate-successful/add-accomodation-add-rate-successful.component';
import {UpdateAccomodationAddRateSuccessfulComponent} from 'src/app/modals/accomodation-add-rate/update-accomodation-add-rate-successful/update-accomodation-add-rate-successful.component';
import {UpdateAccomodationAddRateUnsuccessfulComponent} from 'src/app/modals/accomodation-add-rate/update-accomodation-add-rate-unsuccessful/update-accomodation-add-rate-unsuccessful.component';
import {DeleteAccomodationAddRateSuccessfulComponent} from 'src/app/modals/accomodation-add-rate/delete-accomodation-add-rate-successful/delete-accomodation-add-rate-successful.component';
import {DeleteAccomodationAddRateUnsuccessfulComponent} from 'src/app/modals/accomodation-add-rate/delete-accomodation-add-rate-unsuccessful/delete-accomodation-add-rate-unsuccessful.component';
import { Router } from '@angular/router';

export interface AccommodationTypeAddRate{
  AddRateID: number;
  AccomodationTypeID: number;
  AdultRateAmount: number;
  ChildRateAmount: number;
 DateEffective: Date;
 }

@Injectable({
  providedIn: 'root'
})
export class AccommAddRateService {

  constructor(private dialog: MatDialog, private http: HttpClient, 
              private router: Router) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  createAccommodationTypeAddRate(AccommodationTypeAddRate, link){
    return this.http.post(`${link}/api/AccommodationAddRate/createAddRate`, AccommodationTypeAddRate).subscribe((addResult: any) => {
      if (addResult.Error){
        const addAccomodationAddRateUnsuccessfulDialog = this.dialog.open(AddAccomodationAddRateUnsuccessfulComponent);
        localStorage.setItem('user', JSON.stringify(addResult.user));
        this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        const addAccomodationAddRateSuccessfulDialog = this.dialog.open(AddAccomodationAddRateSuccessfulComponent);
        localStorage.setItem('user', JSON.stringify(addResult.user));
        this.refresh.next();
      }
    });
  }
  readAccommodationTypeAddRate(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/AccommodationAddRate/getAddRate`, user);
  }
  updateAccommodationTypeAddRate(updatedAccommodationTypeAddRate, link){
    return this.http.post(`${link}/api/AccommodationAddRate/updateAddRate`, updatedAccommodationTypeAddRate)
    .subscribe((updateResult: any) => {
      if (updateResult.Error){
        const updateAccomodationAddRateUnsuccessfulDialog = this.dialog.open(UpdateAccomodationAddRateUnsuccessfulComponent);
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        const updateAccomodationAddRateSuccessfulDialog = this.dialog.open(UpdateAccomodationAddRateSuccessfulComponent);
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        this.refresh.next();
      }
    });
  }
  deleteAccommodationTypeAddRate(user, AddRateID, link){
    return this.http.post(`${link}/api/AccommodationAddRate/deleteAddRate?addRateID=${AddRateID}`, user).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteAccomodationAddRateUnsuccessfulDialog = this.dialog.open(DeleteAccomodationAddRateUnsuccessfulComponent);
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        const deleteAccomodationAddRateSuccessfulDialog = this.dialog.open(DeleteAccomodationAddRateSuccessfulComponent);
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        this.refresh.next();
      }
    });
  }
}
