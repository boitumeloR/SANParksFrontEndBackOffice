import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import {AddWildcardClusterSuccessfulComponent} from 'src/app/modals/wildcard-cluster/add-wildcard-cluster-successful/add-wildcard-cluster-successful.component';
import {AddWildcardClusterUnsuccessfulComponent} from 'src/app/modals/wildcard-cluster/add-wildcard-cluster-unsuccessful/add-wildcard-cluster-unsuccessful.component';
import {UpdateWildcardClusterSuccessfulComponent} from 'src/app/modals/wildcard-cluster/update-wildcard-cluster-successful/update-wildcard-cluster-successful.component';
import {UpdateWildcardClusterUnsuccessfulComponent} from 'src/app/modals/wildcard-cluster/update-wildcard-cluster-unsuccessful/update-wildcard-cluster-unsuccessful.component';
import { DeleteWildcardClusterSuccessfulComponent } from 'src/app/modals/wildcard-cluster/delete-wildcard-cluster-successful/delete-wildcard-cluster-successful.component';
import { DeleteWildcardClusterUnsuccessfulComponent } from 'src/app/modals/wildcard-cluster/delete-wildcard-cluster-unsuccessful/delete-wildcard-cluster-unsuccessful.component';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import {WildcardClusterAddedComponent} from 'src/app/workflows/wildcard-cluster-added/wildcard-cluster-added.component';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
export interface WildcardCluster {
  WildcardClusterID: number;
  WildcardClusterDescription: string;
  WildcardClusterName: string;
}

// used in CategoryCluster, ParkCluster
export interface WildcardClusterDropDown {
  WildcardClusterID: number;
  WildcardClusterName: string;
}

@Injectable({
  providedIn: 'root'
})

export class WildcardClusterService {
  constructor(private http: HttpClient, private dialog: MatDialog,
              private router: Router, private bottomSheet: MatBottomSheet) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateWildcardCluster(WildcardCluster, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/wildcardCluster/createWildcardCluster`, WildcardCluster).subscribe((addResult: any) => {
      if (addResult.Error){
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addWildcardClusterUnsuccessfulDialog = this.dialog.open(AddWildcardClusterUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addWildcardClusterSuccessfulDialog = this.dialog.open(AddWildcardClusterSuccessfulComponent);
        this.refresh.next();

        addWildcardClusterSuccessfulDialog.afterClosed().subscribe(() => {
          const parkFlowSheet =  this.bottomSheet.open(WildcardClusterAddedComponent);
         });
      }
      displaySpinner.close();
    });
  }

  ReadWildcardCluster(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/wildcardCluster/getwildcardCluster`, user);
  }

  UpdateWildcardCluster(WildcardCluster, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/wildcardCluster/updateWildcardCluster`, WildcardCluster).subscribe((updateResult: any) => {
      if (updateResult.Error){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateWildcardClusterUnsuccessfulDialog = this.dialog.open(UpdateWildcardClusterUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateWildcardClusterSuccessfulDialog = this.dialog.open(UpdateWildcardClusterSuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    });
  }

  DeleteWildcardCluster(user, WildcardClusterID, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/wildcardCluster/deleteWildcardCluster?wildcardClusterID=${WildcardClusterID}`, user)
    .subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteWildcardClusterUnsuccessfulDialog = this.dialog.open(DeleteWildcardClusterUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteWildcardClusterSuccessfulDialog = this.dialog.open(DeleteWildcardClusterSuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    });
  }
}

