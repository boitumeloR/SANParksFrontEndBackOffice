import { Injectable } from '@angular/core';
import {GlobalService} from 'src/app/services/Global/global.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import {AddParkSuccessfulComponent} from 'src/app/modals/park/add-park-successful/add-park-successful.component';
import {AddParkUnsuccessfulComponent} from 'src/app/modals/park/add-park-unsuccessful/add-park-unsuccessful.component';
import {UpdateParkSuccessfulComponent} from 'src/app/modals/park/update-park-successful/update-park-successful.component';
import {UpdateParkUnsuccessfulComponent} from 'src/app/modals/park/update-park-unsuccessful/update-park-unsuccessful.component';
import { DeleteParkSuccessfulComponent } from 'src/app/modals/park/delete-park-successful/delete-park-successful.component';
import { DeleteParkUnsuccessfulComponent } from 'src/app/modals/park/delete-park-unsuccessful/delete-park-unsuccessful.component';
import { Router } from '@angular/router';
export interface Park {
  ParkID: number;
  ParkName: string;
  ParkLimit: number;
  ParkLatitude: string;
  ParkLongitude: string;
  ParkDescription: string;
}

export interface ParkDropdown {
  ParkID: number;
  ParkName: string;
}

@Injectable({
  providedIn: 'root'
})
export class ParkService {
  constructor(private global: GlobalService, private http: HttpClient, private dialog: MatDialog,
              private router: Router) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreatePark(Park, link){
    return this.http.post(`${link}/api/Park/CreatePark`, Park).subscribe((addResult: any) => {
      if (addResult.Error){
       localStorage.setItem('user', JSON.stringify(addResult.user));
       const addParkUnsuccessfulDialog = this.dialog.open(AddParkUnsuccessfulComponent);
       this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
       localStorage.setItem('user', JSON.stringify(addResult.user));
       const addParkSuccessfulDialog = this.dialog.open(AddParkSuccessfulComponent);
       this.refresh.next();
      }
    });
  }

  ReadPark(link){
     const user = JSON.parse(localStorage.getItem('user'));
     return this.http.post(`${link}/api/Park/getPark`, user);
  }

  UpdatePark(Park, link){
    return this.http.post(`${link}/api/Park/UpdatePark`, Park).subscribe((updateResult: any) => {
      if (updateResult.Error){
       localStorage.setItem('user', JSON.stringify(updateResult.user));
       const updateParkUnsuccessfulDialog = this.dialog.open(UpdateParkUnsuccessfulComponent);
       this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
       localStorage.setItem('user', JSON.stringify(updateResult.user));
       const updateParkSuccessfulDialog = this.dialog.open(UpdateParkSuccessfulComponent);
       this.refresh.next();
      }
    });
  }

  DeletePark(user, ParkID, link){
    return this.http.post(`${link}/api/Park/DeletePark?parkID=${ParkID}`, user).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteParkUnsuccessfulDialog = this.dialog.open(DeleteParkUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteParkSuccessfulDialog = this.dialog.open(DeleteParkSuccessfulComponent);
        this.refresh.next();
      }
    });
  }
}
