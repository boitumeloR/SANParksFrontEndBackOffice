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
  constructor(private http: HttpClient, private dialog: MatDialog) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateWildcardCluster(WildcardCluster, link){
    return this.http.post(`${link}/api/wildcardCluster/createWildcardCluster`, WildcardCluster).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
        const addWildcardClusterUnsuccessfulDialog = this.dialog.open(AddWildcardClusterUnsuccessfulComponent);
      }
      else{
        const addWildcardClusterSuccessfulDialog = this.dialog.open(AddWildcardClusterSuccessfulComponent);
      }
    });
  }

  ReadWildcardCluster(link){
    return this.http.get(`${link}/api/wildcardCluster/getwildcardCluster`);
  }

  UpdateWildcardCluster(WildcardCluster, link){
    return this.http.post(`${link}/api/wildcardCluster/updateWildcardCluster`, WildcardCluster).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
        const updateWildcardClusterUnsuccessfulDialog = this.dialog.open(UpdateWildcardClusterUnsuccessfulComponent);
      }
      else{
        const updateWildcardClusterSuccessfulDialog = this.dialog.open(UpdateWildcardClusterSuccessfulComponent);
      }
    });
  }

  DeleteWildcardCluster(WildcardClusterID, link){
    return this.http.delete(`${link}/api/wildcardCluster/deleteWildcardCluster?wildcardClusterID=${WildcardClusterID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteWildcardClusterUnsuccessfulDialog = this.dialog.open(DeleteWildcardClusterUnsuccessfulComponent);
      }
      else{
        const deleteWildcardClusterSuccessfulDialog = this.dialog.open(DeleteWildcardClusterSuccessfulComponent);
      }
    });
  }
}

