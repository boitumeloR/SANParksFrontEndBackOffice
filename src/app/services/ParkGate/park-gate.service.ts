import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import { Subject } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {AddParkGateSuccessfulComponent} from 'src/app/modals/park-gate/add-park-gate-successful/add-park-gate-successful.component';
import {AddParkGateUnsuccessfulComponent} from 'src/app/modals/park-gate/add-park-gate-unsuccessful/add-park-gate-unsuccessful.component';
import {UpdateParkGateSuccessfulComponent} from 'src/app/modals/park-gate/update-park-gate-successful/update-park-gate-successful.component';
import {UpdateParkGateUnsuccessfulComponent} from 'src/app/modals/park-gate/update-park-gate-unsuccessful/update-park-gate-unsuccessful.component';
import { DeleteParkGateSuccessfulComponent } from 'src/app/modals/park-gate/delete-park-gate-successful/delete-park-gate-successful.component';
import {  DeleteParkGateUnsuccessfulComponent } from 'src/app/modals/park-gate/delete-park-gate-unsuccessful/delete-park-gate-unsuccessful.component';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import {ParkgateaddedComponent} from 'src/app/workflows/parkgateadded/parkgateadded.component';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
export interface ParkGate {
  ParkGateID: number;
  ParkID: number;
  ParkName: string;
  ParkGateDescription: string;
  ParkGateMax: number;
  ParkGateLatitude: string;
  ParkGateLongitude: string;
  ParkGateName: string;
}
// ParkGateTime, Distance, DayVisit, CheckPark
export interface ParkGateDropDown {
  ParkGateID: number;
  ParkGateName: string;
}

@Injectable({
  providedIn: 'root'
})
export class ParkGateService {

  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router,
              private bottomSheet: MatBottomSheet) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateParkGate(ParkGate, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.http.post(`${link}/api/parkGate/createParkGate`, ParkGate).subscribe((addResult: any) => {
      if (addResult.Error){
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addParkGateUnsuccessfulDialog = this.dialog.open(AddParkGateUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addParkGateSuccessfulDialog = this.dialog.open(AddParkGateSuccessfulComponent);
        this.refresh.next();

        addParkGateSuccessfulDialog.afterClosed().subscribe(() => {
          const parkFlowSheet =  this.bottomSheet.open(ParkgateaddedComponent);
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

  ReadParkGate(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/parkGate/getParkGate`, user);
  }

  UpdateParkGate(ParkGate, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.http.post(`${link}/api/parkGate/updateParkGate`, ParkGate).subscribe((updateResult: any) => {
      if (updateResult.Error){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateParkGateUnsuccessfulDialog = this.dialog.open(UpdateParkGateUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateParkGateSuccessfulDialog = this.dialog.open(UpdateParkGateSuccessfulComponent);
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

  DeleteParkGate(user, ParkGateID, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.http.post(`${link}/api/parkGate/deleteParkGate?parkGateID=${ParkGateID}`, user).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteParkGateUnsuccessfulDialog = this.dialog.open(DeleteParkGateUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteParkGateSuccessfulDialog = this.dialog.open(DeleteParkGateSuccessfulComponent);
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

  GetParkGatesForAPark(parkID, link){
    return this.http.get(`${link}/api/parkGate/getParkGateForPark?parkID=${parkID}`);
  }
}
