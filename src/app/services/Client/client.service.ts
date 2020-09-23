import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Client {
  ClientID: number;
  ClientName: string;
  ClientSurname: string;
  ClientIDCode: string;
  ClientEmail: string;
  ClientTitle: string;
  AddressLine1: string;
  AddressLine2: string;
  PostalCode: string;
  ClientAge: number;
  ClientCellphone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private refresh = new Subject<void>();
  constructor(private http: HttpClient) { }

  get requestRefresh(){
    return this.refresh;
  }

  readClients(link: string){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/Client/getClients`, user);
  }
}
