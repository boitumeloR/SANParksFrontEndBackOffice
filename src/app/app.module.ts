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
import {UpdateParkConfirmationComponent} from 'src/app/modals/park/update-park-confirmation/update-park-confirmation.component';
import { AddParkConfirmationComponent } from './modals/park/add-park-confirmation/add-park-confirmation.component';
import { AddParkGateComponent } from './modals/park-gate/add-park-gate/add-park-gate.component';
import {ParkGateComponent} from './pages/park-gate/park-gate.component'
import {AddParkGateConfirmationComponent} from 'src/app/modals/park-gate/add-park-gate-confirmation/add-park-gate-confirmation.component';
import {ViewParkGateComponent} from 'src/app/modals/park-gate/view-park-gate/view-park-gate.component';
import {UpdateParkGateComponent} from 'src/app/modals/park-gate/update-park-gate/update-park-gate.component';
import {UpdateParkGateConfirmationComponent} from 'src/app/modals/park-gate/update-park-gate-confirmation/update-park-gate-confirmation.component';
import {DeleteParkGateComponent} from 'src/app/modals/park-gate/delete-park-gate/delete-park-gate.component';
import { ParkGateTimeComponent } from 'src/app/pages/park-gate-time/park-gate-time.component';
import { AddParkGateTimeComponent } from 'src/app/modals/park-gate-time/add-park-gate-time/add-park-gate-time.component';
import { UpdateParkGateTimeComponent } from 'src/app/modals/park-gate-time/update-park-gate-time/update-park-gate-time.component';
import { DeleteParkGateTimeComponent } from 'src/app/modals/park-gate-time/delete-park-gate-time/delete-park-gate-time.component';
import { UpdateParkGateTimeConfirmationComponent } from 'src/app/modals/park-gate-time/update-park-gate-time-confirmation/update-park-gate-time-confirmation.component';
import { ViewParkGateTimeComponent } from 'src/app/modals/park-gate-time/view-park-gate-time/view-park-gate-time.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { AddParkGateTimeConfirmationComponent } from './modals/park-gate-time/add-park-gate-time-confirmation/add-park-gate-time-confirmation.component';
import { DailyConservationFeeComponent } from 'src/app/pages/daily-conservation-fee/daily-conservation-fee.component';
import { AddDailyConservationFeeComponent } from 'src/app/modals/daily-conservation-fee/add-daily-conservation-fee/add-daily-conservation-fee.component';
import { AddDailyConservationFeeConfirmationComponent } from 'src/app/modals/daily-conservation-fee/add-daily-conservation-fee-confirmation/add-daily-conservation-fee-confirmation.component';
import { DeleteDailyConservationFeeConfirmationComponent } from 'src/app/modals/daily-conservation-fee/delete-daily-conservation-fee-confirmation/delete-daily-conservation-fee-confirmation.component';
import { UpdateDailyConservationFeeConfirmationComponent } from 'src/app/modals/daily-conservation-fee/update-daily-conservation-fee-confirmation/update-daily-conservation-fee-confirmation.component';
import { UpdateDailyConservationFeeComponent } from 'src/app/modals/daily-conservation-fee/update-daily-conservation-fee/update-daily-conservation-fee.component';
import { ViewDailyConservationFeeComponent } from 'src/app/modals/daily-conservation-fee/view-daily-conservation-fee/view-daily-conservation-fee.component';
import {MatNativeDateModule} from '@angular/material/core';
import { SeasonComponent } from './pages/season/season.component';
import { AddSeasonComponent } from './modals/season/add-season/add-season.component';
import { AddSeasonConfirmationComponent } from './modals/season/add-season-confirmation/add-season-confirmation.component';
import { UpdateSeasonConfirmationComponent } from './modals/season/update-season-confirmation/update-season-confirmation.component';
import { UpdateSeasonComponent } from './modals/season/update-season/update-season.component';
import { DeleteSeasonComponent } from './modals/season/delete-season/delete-season.component';
import { ViewSeasonComponent } from './modals/season/view-season/view-season.component';
import { CampTypeComponent } from './pages/camp-type/camp-type.component';
import { AddCampTypeComponent } from './modals/camp-type/add-camp-type/add-camp-type.component';
import { AddCampTypeConfirmationComponent } from './modals/camp-type/add-camp-type-confirmation/add-camp-type-confirmation.component';
import { UpdateCampTypeConfirmationComponent } from './modals/camp-type/update-camp-type-confirmation/update-camp-type-confirmation.component';
import { UpdateCampTypeComponent } from './modals/camp-type/update-camp-type/update-camp-type.component';
import { ViewCampTypeComponent } from './modals/camp-type/view-camp-type/view-camp-type.component';
import { DeleteCampTypeComponent } from './modals/camp-type/delete-camp-type/delete-camp-type.component';
import { CampComponent } from './pages/camp/camp.component';
import { AddCampComponent } from './modals/camp/add-camp/add-camp.component';
import { AddCampConfirmationComponent } from './modals/camp/add-camp-confirmation/add-camp-confirmation.component';
import { UpdateCampComponent } from './modals/camp/update-camp/update-camp.component';
import { UpdateCampConfirmationComponent } from './modals/camp/update-camp-confirmation/update-camp-confirmation.component';
import { DeleteCampComponent } from './modals/camp/delete-camp/delete-camp.component';
import { ViewCampComponent } from './modals/camp/view-camp/view-camp.component';
import { CampGateTimeComponent } from './pages/camp-gate-time/camp-gate-time.component';
import { AddCampGateTimeComponent } from './modals/camp-gate-time/add-camp-gate-time/add-camp-gate-time.component';
import { AddCampGateTimeConfirmationComponent } from './modals/camp-gate-time/add-camp-gate-time-confirmation/add-camp-gate-time-confirmation.component';
import { UpdateCampGateTimeConfirmationComponent } from './modals/camp-gate-time/update-camp-gate-time-confirmation/update-camp-gate-time-confirmation.component';
import { UpdateCampGateTimeComponent } from './modals/camp-gate-time/update-camp-gate-time/update-camp-gate-time.component';
import { DeleteCampGateTimeComponent } from './modals/camp-gate-time/delete-camp-gate-time/delete-camp-gate-time.component';
import { ViewCampGateTimeComponent } from './modals/camp-gate-time/view-camp-gate-time/view-camp-gate-time.component';
import { WildcardClusterComponent } from './pages/wildcard-cluster/wildcard-cluster.component';
import { AddWildcardClusterComponent } from './modals/wildcard-cluster/add-wildcard-cluster/add-wildcard-cluster.component';
import { AddWildcardClusterConfirmationComponent } from './modals/wildcard-cluster/add-wildcard-cluster-confirmation/add-wildcard-cluster-confirmation.component';
import { UpdateWildcardClusterConfirmationComponent } from './modals/wildcard-cluster/update-wildcard-cluster-confirmation/update-wildcard-cluster-confirmation.component';
import { UpdateWildcardClusterComponent } from './modals/wildcard-cluster/update-wildcard-cluster/update-wildcard-cluster.component';
import { DeleteWildcardClusterComponent } from './modals/wildcard-cluster/delete-wildcard-cluster/delete-wildcard-cluster.component';
import { ViewWildcardClusterComponent } from './modals/wildcard-cluster/view-wildcard-cluster/view-wildcard-cluster.component';
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
    ViewParkComponent,
    UpdateParkConfirmationComponent,
    AddParkConfirmationComponent,
    AddParkGateComponent,
    ParkGateComponent,
    AddParkGateConfirmationComponent,
    ViewParkGateComponent,
    UpdateParkGateComponent,
    UpdateParkGateConfirmationComponent,
    DeleteParkGateComponent,
    ParkGateTimeComponent,
    AddParkGateTimeComponent,
    UpdateParkGateTimeComponent,
    DeleteParkGateTimeComponent,
    UpdateParkGateTimeConfirmationComponent,
    ViewParkGateTimeComponent,
    AddParkGateTimeConfirmationComponent,
    DailyConservationFeeComponent,
    AddDailyConservationFeeComponent,
    AddDailyConservationFeeConfirmationComponent,
    DeleteDailyConservationFeeConfirmationComponent,
    UpdateDailyConservationFeeConfirmationComponent,
    UpdateDailyConservationFeeComponent,
    ViewDailyConservationFeeComponent,
    SeasonComponent,
    AddSeasonComponent,
    AddSeasonConfirmationComponent,
    UpdateSeasonConfirmationComponent,
    UpdateSeasonComponent,
    DeleteSeasonComponent,
    ViewSeasonComponent,
    CampTypeComponent,
    AddCampTypeComponent,
    AddCampTypeConfirmationComponent,
    UpdateCampTypeConfirmationComponent,
    UpdateCampTypeComponent,
    ViewCampTypeComponent,
    DeleteCampTypeComponent,
    CampComponent,
    AddCampComponent,
    AddCampConfirmationComponent,
    UpdateCampComponent,
    UpdateCampConfirmationComponent,
    DeleteCampComponent,
    ViewCampComponent,
    CampGateTimeComponent,
    AddCampGateTimeComponent,
    AddCampGateTimeConfirmationComponent,
    UpdateCampGateTimeConfirmationComponent,
    UpdateCampGateTimeComponent,
    DeleteCampGateTimeComponent,
    ViewCampGateTimeComponent,
    WildcardClusterComponent,
    AddWildcardClusterComponent,
    AddWildcardClusterConfirmationComponent,
    UpdateWildcardClusterConfirmationComponent,
    UpdateWildcardClusterComponent,
    DeleteWildcardClusterComponent,
    ViewWildcardClusterComponent
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
    DeleteAccommodationTypeComponent,
    AddParkGateComponent
  ],
  imports: [
    SimplebarAngularModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxMaterialTimepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
