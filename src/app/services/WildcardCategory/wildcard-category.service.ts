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
  constructor(private global: GlobalService, private http: HttpClient, private dialog: MatDialog) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateWildcardCategory(WildcardCategory, link){
    return this.http.post(`${link}/api/WildcardCategory/CreateWildcardCategory`, WildcardCategory).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
       const addWildcardCategoryUnsuccessfulComponent = this.dialog.open(AddWildcardCategoryUnsuccessfulComponent);
      }
      else{
       const addWildcardCategorySuccessfulComponent = this.dialog.open(AddWildcardCategorySuccessfulComponent);
      }
    });
  }

  ReadWildcardCategory(link){
    return this.http.get(`${link}/api/WildcardCategory/getWildcardCategory`);
  }

  UpdateWildcardCategory(WildcardCategory, link){
    return this.http.post(`${link}/api/WildcardCategory/UpdateWildcardCategory`, WildcardCategory).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
       const updateWildcardCategoryUnsuccessfulComponent = this.dialog.open(UpdateWildcardCategoryUnsuccessfulComponent);
      }
      else{
       const updateWildcardCategorySuccessfulComponent = this.dialog.open(UpdateWildcardCategorySuccessfulComponent);
      }
    });
  }

  DeleteWildcardCategory(WildcardCategoryID, link){
    return this.http.delete(`${link}/api/WildcardCategory/DeleteWildcardCategory?wildcardCategoryID=${WildcardCategoryID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteWildcardCategoryUnsuccessfulComponent = this.dialog.open(DeleteWildcardCategoryUnsuccessfulComponent);
      }
      else{
        const deleteWildcardCategorySuccessfulComponent = this.dialog.open(DeleteWildcardCategorySuccessfulComponent);
      }
    });
  }
}
