import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {AddSeasonSuccessfulComponent} from 'src/app/modals/season/add-season-successful/add-season-successful.component';
import {AddSeasonUnsuccessfulComponent} from 'src/app/modals/season/add-season-unsuccessful/add-season-unsuccessful.component';
import {UpdateSeasonSuccessfulComponent} from 'src/app/modals/season/update-season-successful/update-season-successful.component';
import {UpdateSeasonUnsuccessfulComponent} from 'src/app/modals/season/update-season-unsuccessful/update-season-unsuccessful.component';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import {SeasonaddedComponent} from 'src/app/workflows/seasonadded/seasonadded.component';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';

export interface Season {
  SeasonID: number;
  SeasonName: string;
  StartDate: Date;
  EndDate: Date;
}
// SeasonDate, SeasonParkGateTime, SeasonCampGateTime, BaseRateSeason
export interface SeasonDropDown {
  SeasonID: number;
  SeasonName: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router,
              private bottomSheet: MatBottomSheet) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateSeason(Season, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.http.post(`${link}/api/season/createSeason`, Season).subscribe((addResult: any) => {
      if (addResult.Error){
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addSeasonUnsuccessfulDialog = this.dialog.open(AddSeasonUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addSeasonSuccessfulDialog = this.dialog.open(AddSeasonSuccessfulComponent);
        this.refresh.next();

        addSeasonSuccessfulDialog.afterClosed().subscribe(() => {
          const parkFlowSheet =  this.bottomSheet.open(SeasonaddedComponent);
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

  ReadSeason(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/season/getSeason`, user);
  }

  UpdateSeason(Season, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.http.post(`${link}/api/season/updateSeason`, Season).subscribe((updateResult: any) => {
      if (updateResult.Error){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateSeasonUnsuccessfulDialog = this.dialog.open(UpdateSeasonUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateSeasonSuccessfulDialog = this.dialog.open(UpdateSeasonSuccessfulComponent);
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
