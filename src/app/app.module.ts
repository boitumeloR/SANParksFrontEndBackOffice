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
import { SimplebarAngularModule } from 'simplebar-angular';
import { BaseRatesComponent } from './pages/base-rates/base-rates.component';
import { AddBaseRateComponent } from './modals/base-rate/add-base-rate/add-base-rate.component';
import { UpdateBaseRateComponent } from './modals/base-rate/update-base-rate/update-base-rate.component';
import { DeleteBaseRateComponent } from './modals/base-rate/delete-base-rate/delete-base-rate.component';
import { AddRatesComponent } from './pages/add-rates/add-rates.component';
import { AddAddRateComponent } from './modals/add-rate/add-add-rate/add-add-rate.component';
import { UpdateAddRateComponent } from './modals/add-rate/update-add-rate/update-add-rate.component';
import { DeleteAddRateComponent } from './modals/add-rate/delete-add-rate/delete-add-rate.component';
import { AmenityComponent } from './pages/amenity/amenity.component';
import { AddAmenityComponent } from './modals/amenity/add-amenity/add-amenity.component';
import { UpdateAmenityComponent } from './modals/amenity/update-amenity/update-amenity.component';
import { DeleteAmenityComponent } from './modals/amenity/delete-amenity/delete-amenity.component';
import { AmenityPenaltyComponent } from './pages/amenity-penalty/amenity-penalty.component';
import { AddAmenityPenaltyComponent } from './modals/amenity-penalty/add-amenity-penalty/add-amenity-penalty.component';
import { UpdateAmenityPenaltyComponent } from './modals/amenity-penalty/update-amenity-penalty/update-amenity-penalty.component';
import { DeleteAmenityPenaltyComponent } from './modals/amenity-penalty/delete-amenity-penalty/delete-amenity-penalty.component';
import { ActivityRateComponent } from './pages/activity-rate/activity-rate.component';
import { AddActivityRateComponent } from './modals/activity-rate/add-activity-rate/add-activity-rate.component';
import { UpdateActivityRateComponent } from './modals/activity-rate/update-activity-rate/update-activity-rate.component';
import { DeleteActivityRateComponent } from './modals/activity-rate/delete-activity-rate/delete-activity-rate.component';
import { ViewParkComponent } from './modals/park/view-park/view-park.component';


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
    BaseRatesComponent,
    AddBaseRateComponent,
    UpdateBaseRateComponent,
    DeleteBaseRateComponent,
    AddRatesComponent,
    AddAddRateComponent,
    UpdateAddRateComponent,
    DeleteAddRateComponent,
    AmenityComponent,
    AddAmenityComponent,
    UpdateAmenityComponent,
    DeleteAmenityComponent,
    AmenityPenaltyComponent,
    AddAmenityPenaltyComponent,
    UpdateAmenityPenaltyComponent,
    DeleteAmenityPenaltyComponent,
    ActivityRateComponent,
    AddActivityRateComponent,
    UpdateActivityRateComponent,
    DeleteActivityRateComponent,
    ViewParkComponent
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
