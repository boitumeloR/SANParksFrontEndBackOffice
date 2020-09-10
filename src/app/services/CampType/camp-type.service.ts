import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GlobalService} from 'src/app/services/Global/global.service';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AddCampTypeSuccessfulComponent} from 'src/app/modals/camp-type/add-camp-type-successful/add-camp-type-successful.component';
import { AddCampTypeUnsuccessfulComponent} from 'src/app/modals/camp-type/add-camp-type-unsuccessful/add-camp-type-unsuccessful.component';
import { UpdateCampTypeSuccessfulComponent} from 'src/app/modals/camp-type/update-camp-type-successful/update-camp-type-successful.component';
import { UpdateCampTypeUnsuccessfulComponent} from 'src/app/modals/camp-type/update-camp-type-unsuccessful/update-camp-type-unsuccessful.component';
import { DeleteCampTypeSuccessfulComponent} from 'src/app/modals/camp-type/delete-camp-type-successful/delete-camp-type-successful.component';
import { DeleteCampTypeUnsuccessfulComponent} from 'src/app/modals/camp-type/delete-camp-type-unsuccessful/delete-camp-type-unsuccessful.component';
import { Router } from '@angular/router';



export interface CampType {
  CampTypeID: number;
  CampTypeDescription: string;
  CampTypeName: string;
}
// Camp
export interface CampTypeDropDown {
  CampTypeID: number;
  CampTypeName: string;
}

@Injectable({
  providedIn: 'root'
})
export class CampTypeService {
  constructor(private global: GlobalService, private http: HttpClient, private dialog: MatDialog, private router: Router) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateCampType(CampType, link){
    return this.http.post(`${link}/api/CampType/CreateCampType`, CampType).subscribe((addResult: any) => {
      if (addResult.Error){
       localStorage.setItem('user', JSON.stringify(addResult.user));
       const addCampTypeUnsuccessfulDialog = this.dialog.open(AddCampTypeUnsuccessfulComponent);
       this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
       localStorage.setItem('user', JSON.stringify(addResult.user));
       const addCampTypeSuccessfulDialog = this.dialog.open(AddCampTypeSuccessfulComponent);
       this.refresh.next();
      }
    });
  }

  ReadCampType(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/CampType/getCampType`, user);
  }

  UpdateCampType(CampType, link){
    return this.http.post(`${link}/api/CampType/UpdateCampType`, CampType).subscribe((UpdateResult: any) => {
      if (UpdateResult.Error){
       localStorage.setItem('user', JSON.stringify(UpdateResult.user));
       const updateCampTypeUnsuccessfulDialog = this.dialog.open(UpdateCampTypeUnsuccessfulComponent);
       this.refresh.next();
      }
      else if (UpdateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
       localStorage.setItem('user', JSON.stringify(UpdateResult.user));
       const updateCampTypeSuccessfulDialog = this.dialog.open(UpdateCampTypeSuccessfulComponent);
       this.refresh.next();
      }
    });
  }

  DeleteCampType(user, CampTypeID, link){
    return this.http.post(`${link}/api/CampType/DeleteCampType?campTypeID=${CampTypeID}`, user).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteCampTypeUnsuccessfulDialog = this.dialog.open(DeleteCampTypeUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteCampTypeSuccessfulDialog = this.dialog.open(DeleteCampTypeSuccessfulComponent);
        this.refresh.next();
      }
    });
  }
}
