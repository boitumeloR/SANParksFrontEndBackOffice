import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './subcomponents/header/header.component';
import { ParkComponent } from './pages/park/park.component';
import { MainNavComponent } from './subcomponents/main-nav/main-nav.component';
import { AddParkComponent } from './modals/park/add-park/add-park.component';
import { UpdateParkComponent } from './modals/park/update-park/update-park.component';
import { DeleteParkComponent } from './modals/park/delete-park/delete-park.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { AddActivityComponent } from './modals/activity/add-activity/add-activity.component';
import { UpdateActivityComponent } from './modals/activity/update-activity/update-activity.component';
import { DeleteActivityComponent } from './modals/activity/delete-activity/delete-activity.component';
import { AccommodationTypeComponent } from './pages/accommodation-type/accommodation-type.component';
import { AddAccommodationTypeComponent } from './modals/accommodation-type/add-accommodation-type/add-accommodation-type.component';
import {UpdateAccommodationTypeComponent} from './modals/accommodation-type/update-accommodation-type/update-accommodation-type.component';
import {DeleteAccommodationTypeComponent} from './modals/accommodation-type/delete-accommodation-type/delete-accommodation-type.component';
import { AccommodationImagesComponent } from './subcomponents/accommodation-images/accommodation-images.component';
import { SimplebarAngularModule } from 'simplebar-angular';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParkComponent,
    MainNavComponent,
    AddParkComponent,
    UpdateParkComponent,
    DeleteParkComponent,
    ActivityComponent,
    AddActivityComponent,
    UpdateActivityComponent,
    DeleteActivityComponent,
    AccommodationTypeComponent,
    AddAccommodationTypeComponent,
    UpdateAccommodationTypeComponent,
    DeleteAccommodationTypeComponent,
    AccommodationImagesComponent
  ],
  entryComponents: [
    AddParkComponent,
    UpdateParkComponent,
    DeleteParkComponent,
    AddActivityComponent,
    UpdateActivityComponent,
    DeleteActivityComponent,
    AddAccommodationTypeComponent,
    UpdateAccommodationTypeComponent,
    DeleteAccommodationTypeComponent
  ],
  imports: [
    SimplebarAngularModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
