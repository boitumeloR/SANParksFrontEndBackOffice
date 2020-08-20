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
  constructor(private global: GlobalService, private http: HttpClient, private dialog: MatDialog) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateCampType(CampType, link){
    return this.http.post(`${link}/api/CampType/CreateCampType`, CampType).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
       const addCampTypeUnsuccessfulDialog = this.dialog.open(AddCampTypeUnsuccessfulComponent);
      }
      else{
       const addCampTypeSuccessfulDialog = this.dialog.open(AddCampTypeSuccessfulComponent);
      }
    });
  }

  ReadCampType(link){
    return this.http.get(`${link}/api/CampType/getCampType`);
  }

  UpdateCampType(CampType, link){
    return this.http.post(`${link}/api/CampType/UpdateCampType`, CampType).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((UpdateResult: any) => {
      if (UpdateResult.Error){
       const updateCampTypeUnsuccessfulDialog = this.dialog.open(UpdateCampTypeUnsuccessfulComponent);
      }
      else{
       const updateCampTypeSuccessfulDialog = this.dialog.open(UpdateCampTypeSuccessfulComponent);
      }
    });
  }

  DeleteCampType(CampTypeID, link){
    return this.http.delete(`${link}/api/CampType/DeleteCampType?campTypeID=${CampTypeID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteCampTypeUnsuccessfulDialog = this.dialog.open(DeleteCampTypeUnsuccessfulComponent);
      }
      else{
        const deleteCampTypeSuccessfulDialog = this.dialog.open(DeleteCampTypeSuccessfulComponent);
      }
    });
  }
}
