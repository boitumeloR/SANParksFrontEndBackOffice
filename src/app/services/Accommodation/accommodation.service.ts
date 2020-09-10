import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import {AddAccomodationSuccessfulComponent} from 'src/app/modals/accomodation/add-accomodation-successful/add-accomodation-successful.component';
import {AddAccomodationUnsuccessfulComponent} from 'src/app/modals/accomodation/add-accomodation-unsuccessful/add-accomodation-unsuccessful.component';
import {UpdateAccomodationSuccessfulComponent} from 'src/app/modals/accomodation/update-accomodation-successful/update-accomodation-successful.component';
import {UpdateAccomodationUnsuccessfulComponent} from 'src/app/modals/accomodation/update-accomodation-unsuccessful/update-accomodation-unsuccessful.component';
import {DeleteAccomodationSuccessfulComponent} from 'src/app/modals/accomodation/delete-accomodation-successful/delete-accomodation-successful.component';
import {DeleteAccomodationUnsuccessfulComponent} from 'src/app/modals/accomodation/delete-accomodation-unsuccessful/delete-accomodation-unsuccessful.component';
import { Router } from '@angular/router';


export interface Accommodation{
  AccommodationID: number;
  UnitNumber: number;
  AccomodationTypeID: number;
  AccomodationType: string;
  CampID: number;
  Camp: string;
  ParkName: string;
}


@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  constructor(private dialog: MatDialog , private http: HttpClient,
              private router: Router) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  createAccommodation(Accommodation, link){
    return this.http.post(`${link}/api/accommodation/createAccommodation`, Accommodation).subscribe((addResult: any) => {
      if (addResult.Error){
        localStorage.setItem('user', JSON.stringify(addResult.user));
        this.refresh.next();
        const addAccomodationUnsuccessfulDialog = this.dialog.open(AddAccomodationUnsuccessfulComponent);
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(addResult.user));
        this.refresh.next();
        const addAccomodationSuccessfulDialog = this.dialog.open(AddAccomodationSuccessfulComponent);
      }
    });
  }
  readAccommodation(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/accommodation/getAccommodations`, user);
  }
  updateAccommodation(updatedAccommodation, link){
    return this.http.post(`${link}/api/accommodation/updateAccommodation`, updatedAccommodation).subscribe((updateResult: any) => {
      if (updateResult.Error){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        this.refresh.next();
        const updateAccomodationUnsuccessfulDialog = this.dialog.open(UpdateAccomodationUnsuccessfulComponent);
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        this.refresh.next();
        const updateAccomodationSuccessfulDialog = this.dialog.open(UpdateAccomodationSuccessfulComponent);
      }
    });
  }
  deleteAccommodation(user, AccommodationID, link){
    return this.http.post(`${link}/api/accommodation/deleteAccommodation?accommodationID=${AccommodationID}`, user).
    subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        this.refresh.next();
        const deleteAccomodationUnsuccessfulDialog = this.dialog.open(DeleteAccomodationUnsuccessfulComponent);
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        this.refresh.next();
        const deleteAccomodationSuccessfulDialog = this.dialog.open(DeleteAccomodationSuccessfulComponent);
      }
    });
  }
  readAccommodationsForAccTypeCamp(accommodationTypeID, campID, link){
    return this.http.get(`${link}/api/accommodation/getUnitNumbersForAccTypeCamp?accommodationTypeID=${accommodationTypeID}&campID=${campID}`);
  }
}
