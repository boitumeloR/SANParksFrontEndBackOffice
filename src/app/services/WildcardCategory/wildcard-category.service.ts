import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface WildcardCategory {
  WildcardCategoryID: number,
  CategoryDescription: string,
  CategoryName: string,
  ChildLimit: number,
  AdultLimit: number,
  
}

//used in CategoryCluster
export interface WildcardCategoryDropDown {
  WildcardCategoryID: number,
  CategoryName: string,
}

@Injectable({
  providedIn: 'root'
})
export class WildcardCategoryService {
  constructor(private http: HttpClient) { }

  CreateWildcardCategory(WildcardCategory, link){

  }

  ReadWildcardCategory(link){

  }

  UpdateWildcardCategory(WildcardCategory, link){

  }

  DeleteWildcardCategory(WildcardCategoryID){

  }
}
