import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface WildcardCluster {
  WildcardClusterID: number,
  WildcardClusterDescription: string,
  WildcardClusterName: string,
  
}

//used in CategoryCluster, ParkCluster
export interface WildcardClusterDropDown {
  WildcardClusterID: number,
  WildcardClusterName: string,
}

@Injectable({
  providedIn: 'root'
})

export class WildcardClusterService {
  constructor(private http: HttpClient) { }

  CreateWildcardCluster(WildcardCluster, link){

  }

  ReadWildcardCluster(link){

  }

  UpdateWildcardCluster(WildcardCluster, link){

  }

  DeleteWildcardCluster(WildcardClusterID){

  }
}

