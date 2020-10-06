import { Injectable } from '@angular/core';
import { GlobalService} from 'src/app/services/Global/global.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AddWildcardCategorySuccessfulComponent} from 'src/app/modals/wildcard-category/add-wildcard-category-successful/add-wildcard-category-successful.component';
import { AddWildcardCategoryUnsuccessfulComponent} from 'src/app/modals/wildcard-category/add-wildcard-category-unsuccessful/add-wildcard-category-unsuccessful.component';
import { UpdateWildcardCategorySuccessfulComponent} from 'src/app/modals/wildcard-category/update-wildcard-category-successful/update-wildcard-category-successful.component';
import { UpdateWildcardCategoryUnsuccessfulComponent} from 'src/app/modals/wildcard-category/update-wildcard-category-unsuccessful/update-wildcard-category-unsuccessful.component';
import { DeleteWildcardCategorySuccessfulComponent} from 'src/app/modals/wildcard-category/delete-wildcard-category-successful/delete-wildcard-category-successful.component';
import { DeleteWildcardCategoryUnsuccessfulComponent} from 'src/app/modals/wildcard-category/delete-wildcard-category-unsuccessful/delete-wildcard-category-unsuccessful.component';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import {WildcardCategoryAddedComponent} from 'src/app/workflows/wildcard-category-added/wildcard-category-added.component';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
export interface WildcardCategory {
  WildcardCategoryID: number;
  CategoryDescription: string;
  CategoryName: string;
  ChildLimit: number;
  AdultLimit: number;
}

// Used in CategoryCluster
export interface WildcardCategoryDropDown {
  WildcardCategoryID: number;
  CategoryName: string;
}

@Injectable({
  providedIn: 'root'
})
export class WildcardCategoryService {
  constructor(private global: GlobalService, private http: HttpClient, private dialog: MatDialog, 
              private router: Router, private bottomSheet: MatBottomSheet) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateWildcardCategory(WildcardCategory, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/WildcardCategory/CreateWildcardCategory`, WildcardCategory).subscribe((addResult: any) => {
      if (addResult.Error){
       localStorage.setItem('user', JSON.stringify(addResult.user));
       const addWildcardCategoryUnsuccessfulComponent = this.dialog.open(AddWildcardCategoryUnsuccessfulComponent);
       this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addWildcardCategorySuccessfulComponent = this.dialog.open(AddWildcardCategorySuccessfulComponent);
        this.refresh.next();

        addWildcardCategorySuccessfulComponent.afterClosed().subscribe(() => {
          const parkFlowSheet =  this.bottomSheet.open(WildcardCategoryAddedComponent);
         });
      }
      displaySpinner.close();
    });
  }

  ReadWildcardCategory(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/WildcardCategory/getWildcardCategory`, user);
  }

  UpdateWildcardCategory(WildcardCategory, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/WildcardCategory/UpdateWildcardCategory`, WildcardCategory).subscribe((updateResult: any) => {
      if (updateResult.Error){
       localStorage.setItem('user', JSON.stringify(updateResult.user));
       const updateWildcardCategoryUnsuccessfulComponent = this.dialog.open(UpdateWildcardCategoryUnsuccessfulComponent);
       this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
       localStorage.setItem('user', JSON.stringify(updateResult.user));
       const updateWildcardCategorySuccessfulComponent = this.dialog.open(UpdateWildcardCategorySuccessfulComponent);
       this.refresh.next();
      }
      displaySpinner.close();
    });
  }

  DeleteWildcardCategory(user , WildcardCategoryID, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/WildcardCategory/DeleteWildcardCategory?wildcardCategoryID=${WildcardCategoryID}`, user ).
    subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteWildcardCategoryUnsuccessfulComponent = this.dialog.open(DeleteWildcardCategoryUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteWildcardCategorySuccessfulComponent = this.dialog.open(DeleteWildcardCategorySuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    });
  }
}
