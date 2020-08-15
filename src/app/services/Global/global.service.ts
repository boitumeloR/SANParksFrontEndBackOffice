import { Injectable } from '@angular/core';

const thisWebServer = 'https://localhost:44371/';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  GetServer() {
    return thisWebServer;
  }
}
