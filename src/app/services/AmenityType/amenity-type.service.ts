import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import {GlobalService} from '../Global/global.service';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import {AddAmenityTypeSuccessfulComponent} from 'src/app/modals/amenity-type/add-amenity-type-successful/add-amenity-type-successful.component';
import {AddAmenityTypeUnsuccessfulComponent} from 'src/app/modals/amenity-type/add-amenity-type-unsuccessful/add-amenity-type-unsuccessful.component';
import {DeleteAmenityTypeSuccessfulComponent} from 'src/app/modals/amenity-type/delete-amenity-type-successful/delete-amenity-type-successful.component';
import {DeleteAmenityTypeUnsuccessfulComponent} from 'src/app/modals/amenity-type/delete-amenity-type-unsuccessful/delete-amenity-type-unsuccessful.component';
import {UpdateAmenityTypeSuccessfulComponent} from 'src/app/modals/amenity-type/update-amenity-type-successful/update-amenity-type-successful.component';
import {UpdateAmenityTypeUnsuccessfulComponent} from 'src/app/modals/amenity-type/update-amenity-type-unsuccessful/update-amenity-type-unsuccessful.component';
import { Router } from '@angular/router';
import { LoginService } from '../Login/login.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AmenitytypeaddedComponent} from 'src/app/workflows/amenitytypeadded/amenitytypeadded.component';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
export interface AmenityType{
  AmenityTypeID: number;
  AmenityTypeName: string;
}

export interface AmenityTypeDropDown{
  AmenityTypeID: number;
  AmenityTypeName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AmenityTypeService {
  constructor(private global: GlobalService , private router: Router, private http: HttpClient, private dialog: MatDialog,
              private loginService: LoginService, private bottomSheet: MatBottomSheet ) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  createAmenityType(AmenityType, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/amenityType/createAmenityType`, AmenityType).subscribe((addResult: any) => {
      if (addResult.Error){
       localStorage.setItem('user', JSON.stringify(addResult.user));
       const addAmenityTypeUnsuccessfulDialog = this.dialog.open(AddAmenityTypeUnsuccessfulComponent);
       this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addAmenityTypeSuccessfulDialog = this.dialog.open(AddAmenityTypeSuccessfulComponent);
        this.refresh.next();

        addAmenityTypeSuccessfulDialog.afterClosed().subscribe(() => {
          const parkFlowSheet =  this.bottomSheet.open(AmenitytypeaddedComponent);
         });
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

  readAmenityType(link){
     const user = JSON.parse(localStorage.getItem('user'));
     return this.http.post(`${link}/api/amenityType/getAmenityType`, user);
  }

  updateAmenityType(updatedAmenityType, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/amenityType/updateAmenityType`, updatedAmenityType).subscribe((updateResult: any) => {
      if (updateResult.Error){
       localStorage.setItem('user', JSON.stringify(updateResult.user));
       const updateAmenityTypeUnsuccessfulDialog = this.dialog.open(UpdateAmenityTypeUnsuccessfulComponent);
       this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateAmenityTypeSuccessfulDialog = this.dialog.open(UpdateAmenityTypeSuccessfulComponent);
        this.refresh.next();
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

  deleteAmenityType(user, AmenityTypeID, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/amenityType/deleteAmenityType?amenityTypeID=${AmenityTypeID}`, user).
    subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteAmenityTypeUnsuccessfulDialog = this.dialog.open(DeleteAmenityTypeUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteAmenityTypeSuccessfulDialog = this.dialog.open(DeleteAmenityTypeSuccessfulComponent);
        this.refresh.next();
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
