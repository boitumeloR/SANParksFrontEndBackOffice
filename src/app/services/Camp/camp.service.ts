import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../Global/global.service';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import {AddCampSuccessfulComponent} from 'src/app/modals/camp/add-camp-successful/add-camp-successful.component';
import {AddCampUnsuccessfulComponent} from 'src/app/modals/camp/add-camp-unsuccessful/add-camp-unsuccessful.component';
import {UpdateCampSuccessfulComponent} from 'src/app/modals/camp/update-camp-successful/update-camp-successful.component';
import {UpdateCampUnsuccessfulComponent} from 'src/app/modals/camp/update-camp-unsuccessful/update-camp-unsuccessful.component';
import { DeleteCampSuccessfulComponent } from 'src/app/modals/camp/delete-camp-successful/delete-camp-successful.component';
import { DeleteCampUnsuccessfulComponent } from 'src/app/modals/camp/delete-camp-unsuccessful/delete-camp-unsuccessful.component';
import { Router } from '@angular/router';

export interface Camp{
  CampID: number;
  ParkID: number;
  CampTypeID: number;
  CampDescription: string;
  CampLatitude: string;
  CampLongitude: string;
  CampName: string;
}

export interface CampDropDown{
  CampID: number;
  CampName: string;
}

@Injectable({
  providedIn: 'root'
})
export class CampService {

  constructor(private global: GlobalService , private http: HttpClient, private dialog: MatDialog,
              private router: Router ) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  createCamp(Camp, link){
    return this.http.post(`${link}/api/Camp/createCamp`, Camp).subscribe((addResult: any) => {
      if (addResult.Error){
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addCampUnsuccessfulDialog = this.dialog.open(AddCampUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addCampSuccessfulDialog = this.dialog.open(AddCampSuccessfulComponent);
        this.refresh.next();
      }
    });
  }
  readCamp(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/Camp/getCamp`, user);
  }
  updateCamp(updatedCamp, link){
    return this.http.post(`${link}/api/Camp/updateCamp`, updatedCamp).subscribe((updateResult: any) => {
      if (updateResult.Error){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateCampUnsuccessfulDialog = this.dialog.open(UpdateCampUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateCampSuccessfulDialog = this.dialog.open(UpdateCampSuccessfulComponent);
        this.refresh.next();
      }
    });
  }
  deleteCamp(user, CampID, link){
    return this.http.post(`${link}/api/Camp/deleteCamp?campID=${CampID}`, user).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteCampUnsuccessfulDialog = this.dialog.open(DeleteCampUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteCampSuccessfulDialog = this.dialog.open(DeleteCampSuccessfulComponent);
        this.refresh.next();
      }
    });
  }
  getCampsForSpecificPark(parkID, link){
    return this.http.get(`${link}/api/Camp/getCampsForPark?parkID=${parkID}`);
  }
}
