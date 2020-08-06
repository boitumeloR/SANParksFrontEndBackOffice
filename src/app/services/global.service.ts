import { Injectable } from '@angular/core';
import { Server } from 'http';

const webServer = 'http://localhost:4200';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  GetServer() { // Global server that is a link to the web server whether its localhost or azure.
    // Link global service into any acomponent that uses a service
    // const webServer = 'http://localhost:4200';
    return webServer;
  }
}
